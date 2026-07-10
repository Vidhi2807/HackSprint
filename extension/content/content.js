// NeuroLens AI — Content Script
// Injected into all web pages

console.log('[NeuroLens] Content script initializing...');

// Basic constants inline since content scripts cannot use top-level ES imports easily without a bundler
const MSG_TYPES = {
  GET_PAGE_INFO: 'GET_PAGE_INFO',
  PAGE_INFO_RESPONSE: 'PAGE_INFO_RESPONSE',
  GET_SELECTION: 'GET_SELECTION',
  SELECTION_CHANGED: 'SELECTION_CHANGED'
};

// State
let lastSelection = '';
let debounceTimer = null;

// Subscription registry
const handlers = {};

// Subscribe to messages
const subscribe = (action, handler) => {
  handlers[action] = handler;
};

// Listen for messages from background/popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.action && handlers[message.action]) {
    Promise.resolve(handlers[message.action](message.payload, sender))
      .then(response => sendResponse({ success: true, data: response }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep the message channel open for async response
  }
});

// Helper: send message
const sendMessage = (action, payload = {}) => {
  chrome.runtime.sendMessage({ action, payload }, (response) => {
    if (chrome.runtime.lastError) {
      console.warn('[NeuroLens] Msg error:', chrome.runtime.lastError.message);
    }
  });
};

// Implement page metadata extraction
subscribe(MSG_TYPES.GET_PAGE_INFO, () => {
  let favicon = '';
  const iconLink = document.querySelector("link[rel~='icon']");
  if (iconLink) {
    favicon = iconLink.href;
  }
  
  return {
    title: document.title,
    url: window.location.href,
    favicon: favicon
  };
});

// Implement basic selection detection (debounce to avoid spam)
const handleSelectionChange = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const selection = window.getSelection();
    if (!selection) return;
    
    const text = selection.toString().trim();
    if (text !== lastSelection && text.length > 0) {
      lastSelection = text;
      // Notify extension of new selection
      sendMessage(MSG_TYPES.SELECTION_CHANGED, { text });
    } else if (text.length === 0 && lastSelection.length > 0) {
      lastSelection = '';
      sendMessage(MSG_TYPES.SELECTION_CHANGED, { text: '' });
    }
  }, 500);
};

document.addEventListener('selectionchange', handleSelectionChange);
document.addEventListener('mouseup', handleSelectionChange);

// Basic scroll tracking
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // We could send scroll percentage if needed in future
    // console.log('[NeuroLens] Scrolled');
  }, 200);
}, { passive: true });

console.log('[NeuroLens] Content script ready.');
