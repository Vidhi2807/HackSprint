import { ERROR_CODES } from './constants.js';

// Subscribe to messages
export const subscribe = (action, handler) => {
  const listener = (message, sender, sendResponse) => {
    if (message.action === action) {
      // Wrap handler in Promise.resolve to handle both sync and async handlers safely
      Promise.resolve(handler(message.payload, sender))
        .then(response => {
          sendResponse({ success: true, data: response });
        })
        .catch(error => {
          sendResponse({ success: false, error: error.message });
        });
      return true; // Keep the message channel open for async response
    }
  };
  chrome.runtime.onMessage.addListener(listener);
  return () => chrome.runtime.onMessage.removeListener(listener);
};

// Send message to background (from popup, sidepanel, content scripts)
export const sendMessage = async (action, payload = {}) => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ action, payload }, (response) => {
      if (chrome.runtime.lastError) {
        return reject(new Error(chrome.runtime.lastError.message));
      }
      if (response && response.success === false) {
        return reject(new Error(response.error));
      }
      resolve(response ? response.data : null);
    });
  });
};

// Send message to a specific tab
export const sendToTab = async (tabId, action, payload = {}) => {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, { action, payload }, (response) => {
      if (chrome.runtime.lastError) {
        return reject(new Error(chrome.runtime.lastError.message));
      }
      if (response && response.success === false) {
        return reject(new Error(response.error));
      }
      resolve(response ? response.data : null);
    });
  });
};

// Request with timeout and retry logic
export const request = async (action, payload = {}, options = {}) => {
  const { timeout = 5000, retries = 0, tabId = null } = options;

  let attempt = 0;
  
  const attemptRequest = async () => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(ERROR_CODES.TIMEOUT));
      }, timeout);

      const callback = (response) => {
        clearTimeout(timer);
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else if (response && response.success === false) {
          reject(new Error(response.error));
        } else {
          resolve(response ? response.data : null);
        }
      };

      if (tabId) {
        chrome.tabs.sendMessage(tabId, { action, payload }, callback);
      } else {
        chrome.runtime.sendMessage({ action, payload }, callback);
      }
    });
  };

  while (attempt <= retries) {
    try {
      return await attemptRequest();
    } catch (error) {
      if (attempt === retries) throw error;
      attempt++;
      // Wait before retrying (exponential backoff could be added here)
      await new Promise(r => setTimeout(r, 500));
    }
  }
};

// Broadcast a message to all tabs
export const broadcast = async (action, payload = {}) => {
  const tabs = await chrome.tabs.query({});
  tabs.forEach(tab => {
    chrome.tabs.sendMessage(tab.id, { action, payload }).catch(() => {
      // Ignore errors for tabs that don't have the content script injected
    });
  });
};
