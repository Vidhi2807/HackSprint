// Extension utility helpers
export const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
};

export const sendToContent = async (tabId, message) => {
  return chrome.tabs.sendMessage(tabId, message);
};
