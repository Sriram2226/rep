# Portfolio Website - Replit Project Guide

## Overview

This is a modern, streamlined portfolio website for a Computer Science student named Alex Chen. The application has been simplified into a single-file React component with integrated dark/light theme support, making it easy to maintain and scale.

## System Architecture

The project follows a simplified monorepo structure with minimal file organization:

- **Frontend**: Single-page React application with all components consolidated
- **Backend**: Minimal Express.js server for contact form handling
- **Database**: Basic setup (not actively used)
- **Styling**: Tailwind CSS with shadcn/ui and built-in dark mode
- **Build System**: Vite for development and production builds

## Key Components

### Frontend Architecture
- **React 18** with TypeScript in a single consolidated component
- **Wouter** for client-side routing (minimal setup)
- **TanStack Query** for API state management
- **shadcn/ui** components for forms and UI elements
- **Tailwind CSS** with CSS variables for theming
- **Font Awesome** for icons
- **Dark/Light Theme** with context provider and toggle

### Simplified Structure
- All portfolio sections consolidated into `/client/src/pages/portfolio.tsx`
- Theme provider in `/client/src/components/theme-provider.tsx`
- Minimal backend with contact form endpoint
- Clean, maintainable codebase with reduced complexity

### Portfolio Sections (All in One File)
- **Navigation**: Fixed header with theme toggle and smooth scrolling
- **Hero Section**: Personal introduction with profile image
- **About Section**: Education background and achievements
- **Skills Section**: Technical skills organized by category
- **Projects Section**: Featured project showcase (3 projects)
- **Contact Section**: Contact form with social links
- **Footer**: Simple footer with attribution

### Theme System
- Context-based theme management
- CSS variables for light/dark mode switching
- Toggle button in navigation (desktop) and mobile menu
- Local storage persistence for user preference
- Smooth transitions between themes

## Data Flow

1. **Single Component**: All sections rendered from one main component
2. **Theme Context**: Global theme state managed via React Context
3. **Contact Form**: Simple form with toast notifications
4. **Navigation**: Intersection Observer for active section tracking
5. **Responsive Design**: Mobile-first with theme toggle in both desktop and mobile views

## External Dependencies

### Core Dependencies
- React 18 with TypeScript
- Tailwind CSS with CSS variables
- shadcn/ui components (Button, Input, Textarea)
- Font Awesome icons

### Development Tools
- Vite for fast development
- Express.js minimal server
- TypeScript for type safety

## Deployment Strategy

### Development
- `npm run dev` starts the application
- Hot module replacement for instant updates
- Dark/light theme toggle works immediately

### Production
- Simplified build process
- Single component structure makes deployment straightforward
- Theme preference persists across sessions

## Recent Changes

```
✓ Consolidated all components into single portfolio.tsx file
✓ Added dark/light theme support with toggle
✓ Simplified architecture for easier maintenance
✓ Reduced project complexity while maintaining functionality
✓ Theme toggle available in both desktop and mobile navigation
```

## Changelog

```
Changelog:
- June 27, 2025: Initial setup with complex component structure
- June 27, 2025: Simplified to single-component architecture with dark theme
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Code style preference: Simple, easy to scale, optimized structure.
```