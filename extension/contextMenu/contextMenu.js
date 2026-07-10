// Context Menu module
import { MSG_TYPES } from '../messaging/constants.js';
import { sendToTab, request } from '../messaging/index.js';

export const handleContextMenu = async (info, tab) => {
  if (!tab || !tab.id) return;
  
  let action;
  let payload = {
    selectionText: info.selectionText,
    pageUrl: info.pageUrl,
    pageUrlId: tab.id
  };

  switch (info.menuItemId) {
    case 'neurolens-explain':
      action = MSG_TYPES.EXPLAIN_SELECTION;
      break;
    case 'neurolens-summarize':
      action = MSG_TYPES.SUMMARIZE_PAGE;
      break;
    case 'neurolens-translate':
      action = MSG_TYPES.TRANSLATE;
      break;
    case 'neurolens-bookmark':
      action = MSG_TYPES.SAVE_WORKSPACE;
      break;
    case 'neurolens-ask':
      action = MSG_TYPES.ASK_NEUROLENS;
      break;
    default:
      console.warn('[NeuroLens] Unknown context menu item:', info.menuItemId);
      return;
  }

  // Open the side panel first to handle the result
  try {
    if (chrome.sidePanel) {
      await chrome.sidePanel.open({ windowId: tab.windowId });
    }
    // Give side panel a moment to load and subscribe before we send the message
    setTimeout(() => {
      chrome.runtime.sendMessage({ action, payload });
    }, 300);
  } catch (error) {
    console.error('[NeuroLens] Error handling context menu:', error);
  }
};
