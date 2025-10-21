# Mini CRM System

A desktop CRM application built with Vite, Electron, and Strapi.

## Tech Stack

- Frontend: Vite + React
- Desktop Runtime: Electron
- Backend: Strapi CMS
- Database: SQLite (default with Strapi)

## Prerequisites

- Node.js 14+
- npm or yarn
- Git

## Project Structure

```
mini_crm/
├── client/          # Vite + React frontend
├── desktop/         # Electron app
└── server/          # Strapi backend
```

## Setup Instructions

1. Clone the repository
2. Install dependencies for each part:

```bash
# Frontend
cd client
npm install

# Desktop
cd desktop
npm install

# Backend
cd server
npm install
```

3. Start development servers:

```bash
# Start Strapi backend
cd server
npm run develop

# Start Vite dev server
cd client
npm run dev

# Start Electron
cd desktop
npm run dev
```

## Development

- Frontend runs on `http://localhost:5173`
- Strapi admin runs on `http://localhost:1337/admin`
- Electron will load the Vite dev server URL

## Building

```bash
# Build frontend
cd client
npm run build

# Build desktop app
cd desktop
npm run build
```

## License

MIT
