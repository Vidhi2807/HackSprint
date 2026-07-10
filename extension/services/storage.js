// Extension storage service
export const storage = {
  async get(key) {
    return new Promise((resolve) => {
      chrome.storage.local.get(key, (result) => resolve(result[key]));
    });
  },
  async set(key, value) {
    return chrome.storage.local.set({ [key]: value });
  },
  async remove(key) {
    return chrome.storage.local.remove(key);
  },
};
