import { request, sendMessage } from '../messaging/index.js';
import { MSG_TYPES } from '../messaging/constants.js';

document.addEventListener('DOMContentLoaded', async () => {
  const btnOpenSidePanel = document.getElementById('btn-open-sidepanel');
  const btnSettings = document.getElementById('btn-settings');
  const tabDetails = document.getElementById('tab-details');
  const statusText = document.getElementById('status-text');

  // Initialize
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const activeTab = tabs[0];
    
    if (activeTab) {
      tabDetails.textContent = activeTab.title || activeTab.url;
    }
  } catch (error) {
    console.error('Error fetching tab info:', error);
    tabDetails.textContent = 'Unable to fetch tab info';
  }

  // Event Listeners
  btnOpenSidePanel.addEventListener('click', async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const currentTab = tabs[0];
      if (currentTab) {
        await sendMessage(MSG_TYPES.TOGGLE_SIDEPANEL, { windowId: currentTab.windowId });
        window.close(); // Close popup after opening side panel
      }
    } catch (err) {
      console.error('Failed to open side panel', err);
    }
  });

  btnSettings.addEventListener('click', () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  });

  // Example of using messaging to fetch status or do health check
  // Here we just set it manually since AI is not implemented
  statusText.textContent = "AI Modules Disabled (Phase 2)";
});
