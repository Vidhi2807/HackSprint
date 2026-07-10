// NeuroLens AI — Background Service Worker
// Manifest V3 Service Worker

// Listen for extension install
chrome.runtime.onInstalled.addListener((details) => {
  console.log('[NeuroLens] Extension installed:', details.reason);

  // Set up context menus
  chrome.contextMenus.create({
    id: 'neurolens-summarize',
    title: 'Summarize with NeuroLens AI',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.create({
    id: 'neurolens-explain',
    title: 'Explain with NeuroLens AI',
    contexts: ['selection'],
  });

  chrome.contextMenus.create({
    id: 'neurolens-bookmark',
    title: 'Save to NeuroLens',
    contexts: ['page'],
  });

  // Enable side panel
  if (chrome.sidePanel) {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: false });
  }
});

// Context menu click handler
chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('[NeuroLens] Context menu clicked:', info.menuItemId);
  // TODO: Implement context menu actions
});

// Command handler
chrome.commands.onCommand.addListener((command) => {
  console.log('[NeuroLens] Command:', command);
  // TODO: Implement command handlers
});

// Message handler from content scripts / popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('[NeuroLens] Message received:', message);
  sendResponse({ status: 'ok' });
  return true;
});
