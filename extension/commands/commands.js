// Commands module
import { MSG_TYPES } from '../messaging/constants.js';

export const handleCommand = async (command) => {
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const currentTab = tabs[0];
    const windowId = currentTab ? currentTab.windowId : undefined;
    
    switch (command) {
      case 'toggle-sidepanel':
      case '_execute_action': // If they click shortcut for popup, maybe we toggle sidepanel or open it
        if (chrome.sidePanel && windowId) {
          await chrome.sidePanel.open({ windowId });
        }
        break;
      default:
        console.warn('[NeuroLens] Unknown command:', command);
    }
  } catch (err) {
    console.error('[NeuroLens] Error handling command:', err);
  }
};
