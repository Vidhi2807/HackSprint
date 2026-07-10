# API Reference

Base URL: `http://localhost:5000/api`

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api` | API index |
| POST | `/api/chat` | Send a message |
| GET | `/api/chat` | Get conversations |
| GET | `/api/chat/:id` | Get conversation by ID |
| DELETE | `/api/chat/:id` | Delete conversation |
| POST | `/api/content/extract` | Extract page content |
| POST | `/api/content/summarize` | Summarize content |
| POST | `/api/content/analyze` | Analyze content |
| GET | `/api/memory` | Get memories |
| POST | `/api/memory` | Create memory |
| DELETE | `/api/memory/:id` | Delete memory |
| GET | `/api/history` | Get browsing history |
| POST | `/api/history` | Add history entry |
| DELETE | `/api/history` | Clear history |
| GET | `/api/bookmarks` | Get bookmarks |
| POST | `/api/bookmarks` | Create bookmark |
| PUT | `/api/bookmarks/:id` | Update bookmark |
| DELETE | `/api/bookmarks/:id` | Delete bookmark |
| GET | `/api/settings` | Get settings |
| PUT | `/api/settings` | Update settings |
| GET | `/api/knowledge` | Get knowledge nodes |
| POST | `/api/knowledge` | Create node |
| GET | `/api/knowledge/:id` | Get node |
| PUT | `/api/knowledge/:id` | Update node |
| DELETE | `/api/knowledge/:id` | Delete node |
| POST | `/api/voice/transcribe` | Transcribe audio |
| POST | `/api/voice/synthesize` | Synthesize speech |

> **Note:** All endpoints are stubs. Business logic not yet implemented.
