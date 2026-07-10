# Architecture

## Overview

NeuroLens AI is structured as a monorepo with four main modules:

```
neurolens-ai/
├── frontend/        → React 19 SPA (Vite)
├── backend/         → Express REST API (Node.js + MongoDB)
├── extension/       → Chrome Extension (Manifest V3)
├── shared/          → Shared constants, types, validators
└── docs/            → Documentation
```

## Data Flow

```
Browser → Extension (Content Script) → Background Service Worker
                                              ↓
                                        Backend API
                                              ↓
                                        MongoDB / AI APIs
                                              ↓
                                   Frontend Dashboard (React)
```

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion, Zustand |
| Backend | Node.js, Express, Mongoose |
| Extension | Manifest V3, Service Workers |
| Database | MongoDB |
| AI (Future) | Gemini API, Ollama, LangChain |
