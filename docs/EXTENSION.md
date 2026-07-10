# Chrome Extension Guide

## Structure

```
extension/
├── manifest.json           → Manifest V3 config
├── background/             → Service worker
├── content/                → Content scripts
├── popup/                  → Popup UI
├── sidepanel/              → Side panel UI
├── contextMenu/            → Right-click menu
├── commands/               → Keyboard shortcuts
├── services/               → API & storage
├── hooks/                  → Extension hooks
├── utils/                  → Helpers
└── assets/                 → Icons
```

## Permissions

- `activeTab` — Access current tab content
- `storage` — Persist data locally
- `sidePanel` — Side panel UI
- `contextMenus` — Right-click menu
- `tabs` — Tab management
- `scripting` — Inject scripts

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+N` | Open NeuroLens AI |
| `Ctrl+Shift+S` | Toggle Side Panel |

## Loading in Chrome

1. Navigate to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `extension/` directory
