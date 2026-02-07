# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Medway is a real-time appointment and queue tracking app that reduces wait times and digitizes clinic visits for patients and doctors. The current implementation is a React-based frontend application.

## Development Setup

### Running the Application

All development commands must be run from the `frontend/` directory:

```bash
cd frontend
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Environment Variables

Create a `.env` file in `frontend/` with Firebase configuration:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

All environment variables must be prefixed with `VITE_` to be accessible in the application via `import.meta.env`.

## Architecture

### Technology Stack

- **Frontend Framework**: React 19 with React Router v7 for routing
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4.x with PostCSS
- **Authentication**: Firebase Auth (email/password)
- **Local Storage**: IndexedDB via the `idb` library
- **Icons**: Lucide React

### Project Structure

```
medway/
└── frontend/          # Main React application
    ├── src/
    │   ├── pages/     # Route pages: Home, Login, Sign, MedicalProfile
    │   ├── components/# Reusable components: AuthTabs, Button, Container, Input
    │   ├── firebase.js # Firebase initialization and auth export
    │   ├── App.jsx    # Route definitions
    │   └── main.jsx   # Application entry point
    ├── public/        # Static assets (images, etc.)
    └── package.json
```

### Key Application Flow

1. **Routing**: All routes defined in [App.jsx](frontend/src/App.jsx)
   - `/` → Home (landing page)
   - `/login` → Login page
   - `/sign` → Sign up page
   - `/profile` → MedicalProfile page

2. **Authentication**:
   - Firebase Auth is initialized in [firebase.js](frontend/src/firebase.js)
   - Auth instance is exported and used in Login/Sign pages
   - Uses `signInWithEmailAndPassword` from Firebase Auth

3. **Shared Components**:
   - **AuthTabs**: Tab switcher between Login/Sign pages with animated sliding indicator
   - **Input**: Styled form input with consistent styling
   - **Button**: Primary button component with brand colors
   - **Container**: Layout wrapper component

### Design System

- **Primary brand color**: `#065F2B` (dark green)
- **Background**: `#F7F7F7` (light gray)
- **Accent**: `#EBDBC4` (beige)
- **Text**: `#283B3F` (dark teal)
- **Button hover**: `#054d23` (darker green)

All styling uses Tailwind utility classes. Custom colors are defined inline.

## Working with Firebase

- Firebase configuration uses environment variables (see Environment Variables section)
- Auth instance is exported from `firebase.js` as `{ auth }`
- Import pattern: `import { auth } from "../firebase"`
- Currently only email/password authentication is implemented

## File Conventions

- React components use `.jsx` extension
- All component files use default exports
- Components are organized by type:
  - Pages in `pages/` (route-level components)
  - Reusable UI in `components/`
- Images are served from `public/` and referenced with absolute paths (e.g., `/logo.png`)

## Notes for Development

- The entire application lives in the `frontend/` directory
- TailwindCSS is using version 4.x with PostCSS plugin
- The medical profile form includes fields for: personal info, medical history, lifestyle habits, and emergency contacts
- The application uses responsive design with clamp() functions for fluid typography and spacing
