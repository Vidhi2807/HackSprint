// NeuroLens AI — Background Service Worker
// Manifest V3 Service Worker

import { subscribe, broadcast } from '../messaging/index.js';
import { MSG_TYPES } from '../messaging/constants.js';
import { handleContextMenu } from '../contextMenu/contextMenu.js';
import { handleCommand } from '../commands/commands.js';
import { featureFlags } from '../utils/featureFlags.js';

console.log('[NeuroLens] Background service worker initializing...', featureFlags);

// Setup Context Menus
const setupContextMenus = () => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: 'neurolens-explain',
      title: 'Explain with NeuroLens AI',
      contexts: ['selection'],
    });

    chrome.contextMenus.create({
      id: 'neurolens-summarize',
      title: 'Summarize with NeuroLens AI',
      contexts: ['page', 'selection'],
    });

    chrome.contextMenus.create({
      id: 'neurolens-translate',
      title: 'Translate Selection',
      contexts: ['selection'],
    });

    if (featureFlags.WORKSPACE) {
      chrome.contextMenus.create({
        id: 'neurolens-bookmark',
        title: 'Save to Workspace',
        contexts: ['page', 'selection'],
      });
    }

    chrome.contextMenus.create({
      id: 'neurolens-ask',
      title: 'Ask NeuroLens about this',
      contexts: ['page', 'selection'],
    });
  });
};

// Lifecycle initialization
chrome.runtime.onInstalled.addListener((details) => {
  console.log('[NeuroLens] Extension installed/updated:', details.reason);
  
  setupContextMenus();

  // Enable side panel behavior
  if (chrome.sidePanel) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: false });
  }
});

// Startup handler
chrome.runtime.onStartup.addListener(() => {
  console.log('[NeuroLens] Background worker started up.');
  setupContextMenus();
});

// Context menu click handler
chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('[NeuroLens] Context menu clicked:', info.menuItemId);
  handleContextMenu(info, tab);
});

// Command handler
chrome.commands.onCommand.addListener((command) => {
  console.log('[NeuroLens] Command:', command);
  handleCommand(command);
});

// Tab listener
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && !tab.url.startsWith('chrome://')) {
    console.log('[NeuroLens] Tab updated:', tab.url);
  }
});

// Message Router subscriptions
subscribe(MSG_TYPES.TOGGLE_SIDEPANEL, async (payload, sender) => {
  const windowId = sender?.tab?.windowId || payload.windowId;
  if (chrome.sidePanel && windowId) {
    await chrome.sidePanel.open({ windowId });
  }
  return { status: 'opened' };
});

subscribe(MSG_TYPES.STATUS_UPDATE, (payload) => {
  console.log('[NeuroLens] Status update:', payload);
  broadcast(MSG_TYPES.STATUS_UPDATE, payload);
  return { status: 'ok' };
});
