export const chromeServices = {
  // Tabs wrapper
  tabs: {
    async getCurrent() {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      return tab;
    },
    async create(url) {
      return chrome.tabs.create({ url });
    },
    async reload(tabId) {
      return chrome.tabs.reload(tabId);
    }
  },

  // Storage wrapper
  storage: {
    async get(key) {
      const result = await chrome.storage.local.get(key);
      return result[key];
    },
    async set(key, value) {
      return chrome.storage.local.set({ [key]: value });
    },
    async remove(key) {
      return chrome.storage.local.remove(key);
    }
  },
  
  // Side panel
  sidePanel: {
    async setOptions(options) {
      if (chrome.sidePanel) {
        await chrome.sidePanel.setOptions(options);
      }
    },
    async open(windowId) {
      if (chrome.sidePanel && chrome.sidePanel.open) {
        await chrome.sidePanel.open({ windowId });
      }
    }
  },

  // Scripting
  scripting: {
    async executeScript(tabId, func, args = []) {
      const results = await chrome.scripting.executeScript({
        target: { tabId },
        func,
        args
      });
      return results[0]?.result;
    }
  }
};
