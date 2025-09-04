# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Veto is a landing page for a company that provides personalized software solutions. This is a Next.js 15 project with React 19, TypeScript, and TailwindCSS built for optimal performance and user experience.

## Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Production build  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically

# Performance Analysis
npm run analyze      # Bundle analyzer (if configured)
```

## Architecture & Performance Guidelines

### Performance-First Development Approach
This project follows strict performance optimization principles:

1. **JavaScript Optimization**
   - Use `next/dynamic` for lazy loading non-critical components
   - Implement code splitting at route and component level
   - Tree-shake unused dependencies
   - Prefer React Server Components when possible

2. **Critical Rendering Path**
   - Inline critical CSS for above-the-fold content
   - Use `next/script` with appropriate loading strategies
   - Implement SSG/SSR based on content requirements
   - Prioritize Core Web Vitals optimization

3. **Image Optimization**
   - Always use `next/image` component with automatic optimization
   - Implement responsive images with proper sizing
   - Use WebP/AVIF formats through Next.js automatic conversion
   - Lazy load images below the fold

4. **Resource Preloading**
   - Preload critical fonts in layout component
   - Use `next/head` for resource hints
   - Implement route prefetching for key navigation paths

### Technology Stack

- **Framework**: Next.js 15.3 with App Router
- **React**: v19.0 with Server Components
- **TypeScript**: v5.x for type safety
- **Styling**: TailwindCSS 4.x for utility-first CSS
- **Deployment**: Optimized for Vercel Edge Functions and CDN

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with critical CSS
│   ├── page.tsx            # Homepage component
│   └── globals.css         # Global styles with Tailwind
└── components/             # Reusable UI components (when created)
```

### Development Standards

- Always measure performance with Lighthouse before/after changes
- Use TypeScript strict mode - no `any` types
- Follow Next.js best practices for SEO and performance
- Implement responsive design mobile-first
- Use semantic HTML and ensure accessibility compliance
- Optimize for Core Web Vitals (LCP, FID, CLS)

### Landing Page Specific Requirements

The landing page should showcase Veto's personalized software development services with:
- Hero section with clear value proposition
- Service offerings presentation
- Client testimonials/portfolio showcase
- Contact/CTA sections
- Performance-optimized loading and interactions

### Performance Monitoring

Always validate changes against:
- Lighthouse performance scores (target: 90+)
- Core Web Vitals thresholds
- Bundle size impact
- Time to Interactive (TTI)
- First Contentful Paint (FCP)