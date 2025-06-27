# Portfolio Website - Replit Project Guide

## Overview

This is a modern portfolio website for a Computer Science student named Alex Chen. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing personal projects, skills, and providing contact functionality.

## System Architecture

The project follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based single-page application with modern UI components
- **Backend**: Express.js server with minimal API endpoints
- **Database**: PostgreSQL with Drizzle ORM (configured but not fully implemented)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and development

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** for state management and API calls
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom design tokens
- **Font Awesome** for icons

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** configured for PostgreSQL database operations
- **Session management** with connect-pg-simple (configured but not active)
- **Development**: Hot reloading with Vite integration
- **Production**: Compiled with esbuild

### UI Component System
- Comprehensive set of reusable UI components from shadcn/ui
- Consistent design system with CSS custom properties
- Responsive design optimized for mobile and desktop
- Dark/light theme support built-in

### Portfolio Sections
- **Hero Section**: Personal introduction with call-to-action buttons
- **About Section**: Background, education, and achievements
- **Skills Section**: Categorized technical skills with icons
- **Projects Section**: Showcase of development projects with technologies used
- **Contact Section**: Contact form with toast notifications
- **Navigation**: Smooth scrolling navigation with active section highlighting

## Data Flow

1. **Client Rendering**: React components render the portfolio content statically
2. **Contact Form**: Form submissions are handled by the `/api/contact` endpoint
3. **State Management**: React Query manages API state and caching
4. **Navigation**: Intersection Observer API tracks active sections for navigation highlighting
5. **Responsive Behavior**: Mobile-first design with collapsible navigation

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM)
- Express.js for server
- TypeScript for type safety

### Database & ORM
- Drizzle ORM with PostgreSQL dialect
- Neon Database serverless adapter
- Database migrations support

### UI & Styling
- Tailwind CSS with PostCSS
- Radix UI primitives for accessible components
- Lucide React for modern icons
- Font Awesome for additional icons

### Development Tools
- Vite for fast development and building
- ESBuild for server compilation
- Replit-specific plugins for development environment

## Deployment Strategy

### Development
- Run `npm run dev` to start both frontend and backend in development mode
- Vite provides hot module replacement for fast development
- Express server runs with tsx for TypeScript execution

### Production Build
- `npm run build` compiles both frontend and backend
- Frontend assets are built to `dist/public`
- Backend is compiled to `dist/index.js`
- `npm start` runs the production server

### Database Setup
- `npm run db:push` applies database schema changes
- Database URL must be provided via `DATABASE_URL` environment variable
- Migrations are stored in the `./migrations` directory

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```