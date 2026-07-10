# Setup Guide

## Prerequisites
- Node.js >= 20
- npm
- MongoDB (optional for dev)

## Frontend

```bash
cd frontend
npm install
npm run dev
```
Opens at `http://localhost:5173`

## Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Runs at `http://localhost:5000`

## Extension

1. Open `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `extension/` folder
