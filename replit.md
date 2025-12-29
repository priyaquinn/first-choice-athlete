# Elite Sports Recruiting Agency Website

## Overview
A professional website for a sports recruiting agency that connects talented athletes with top universities and professional teams. Built with a modern React frontend and Express backend.

## Color Scheme
- **Primary Color**: Red (#b4111d / HSL 355 88% 39%)
- **Secondary Color**: Black (#000000)

## Typography
- **Headlines**: Oswald (Bold, Extra Bold)
- **Subheadings**: Roboto Condensed (Bold, Medium)
- **Body Text**: Inter (Regular, Medium)

## Pages
1. **Home** (`/`) - Hero section, stats, featured athletes, process timeline, testimonials
2. **About** (`/about`) - Company story, values, team, milestones timeline
3. **Services** (`/services`) - 6 service offerings, FAQ accordion
4. **Blog** (`/blog`) - Blog posts with category filtering, newsletter signup
5. **Work With Us** (`/careers`) - Athlete application form, job listings, benefits

## Tech Stack
- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Express, TypeScript
- **State Management**: TanStack Query (React Query)
- **Routing**: wouter
- **Forms**: react-hook-form with zod validation
- **Storage**: In-memory storage (MemStorage)

## API Endpoints
- `POST /api/applications` - Submit athlete application
- `GET /api/applications` - Get all applications
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/featured` - Get featured blog post
- `GET /api/blog/:id` - Get single blog post
- `POST /api/newsletter` - Subscribe to newsletter

## Project Structure
```
client/
├── src/
│   ├── components/     # Shared components (Navigation, Footer)
│   ├── pages/          # Page components (Home, About, Services, Blog, Careers)
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities (queryClient)
│   └── App.tsx         # Main app with routing
server/
├── routes.ts           # API routes
├── storage.ts          # In-memory data storage
└── index.ts            # Server entry point
shared/
└── schema.ts           # Data models and Zod schemas
```

## Running the Application
The application runs on port 5000 with the `npm run dev` command, which starts both the Express backend and Vite dev server.

## Recent Changes
- December 2024: Initial build with all 5 pages
- Implemented athlete application form with react-hook-form and zod validation
- Added blog post fetching from API with category filtering
- Newsletter subscription functionality in footer and blog page
