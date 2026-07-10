// NeuroLens AI — Popup Script

document.addEventListener('DOMContentLoaded', () => {
  console.log('[NeuroLens] Popup loaded');

  // Summarize button
  document.getElementById('btn-summarize')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'summarize' });
  });

  // Chat button
  document.getElementById('btn-chat')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'openChat' });
  });

  // Bookmark button
  document.getElementById('btn-bookmark')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'bookmark' });
  });

  // Side panel button
  document.getElementById('btn-sidepanel')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'toggleSidePanel' });
  });

  // Dashboard link
  document.getElementById('btn-dashboard')?.addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: 'http://localhost:5173/dashboard' });
  });
});
