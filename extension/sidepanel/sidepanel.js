import { subscribe, request, sendMessage } from '../messaging/index.js';
import { MSG_TYPES } from '../messaging/constants.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('[NeuroLens] Sidepanel initializing...');
  
  // Basic tab switching logic
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Add active to clicked
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Listen for actions from context menu or background
  // Example: If context menu triggers a summary, we could display it here
  subscribe(MSG_TYPES.EXPLAIN_SELECTION, (payload) => {
    console.log('[NeuroLens] Sidepanel received explain request:', payload);
    const chatPanel = document.getElementById('panel-chat');
    
    // Switch to chat tab
    document.querySelector('.tab[data-target="panel-chat"]').click();
    
    const div = document.createElement('div');
    div.innerHTML = `<strong>Explain:</strong> ${payload.selectionText}<br><em>AI is currently disabled (Phase 2).</em>`;
    chatPanel.appendChild(div);
    return { status: 'received' };
  });

  subscribe(MSG_TYPES.SUMMARIZE_PAGE, (payload) => {
    console.log('[NeuroLens] Sidepanel received summarize request:', payload);
    document.querySelector('.tab[data-target="panel-chat"]').click();
    const chatPanel = document.getElementById('panel-chat');
    const div = document.createElement('div');
    div.innerHTML = `<strong>Summarize Page</strong><br><em>AI is currently disabled (Phase 2).</em>`;
    chatPanel.appendChild(div);
    return { status: 'received' };
  });

});
