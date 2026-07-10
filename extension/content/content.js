// NeuroLens AI — Content Script
// Injected into all web pages

console.log('[NeuroLens] Content script loaded');

// Listen for messages from background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('[NeuroLens] Content received message:', message);

  switch (message.action) {
    case 'getPageContent':
      sendResponse({
        title: document.title,
        url: window.location.href,
        content: document.body.innerText.substring(0, 5000),
      });
      break;

    case 'getSelection':
      sendResponse({
        selection: window.getSelection()?.toString() || '',
      });
      break;

    default:
      sendResponse({ status: 'unknown action' });
  }

  return true;
});
