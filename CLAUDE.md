# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sweet Baskets is a nonprofit organization website built with Next.js 16 (App Router) and Material UI. The mission is to bring comfort to children in hospitals and elderly individuals who are homebound or in nursing care through personalized care baskets.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Run linter**: `npm run lint`

## Tech Stack

- **Framework**: Next.js 16.0.7 with App Router
- **React**: 19.2.0
- **UI Library**: Material UI (@mui/material 7.3.6) with Emotion for styling
- **Language**: TypeScript 5 (jsx mode: react-jsx)
- **Styling**: Material UI + CSS modules + Emotion
- **Fonts**: Geist Sans and Geist Mono (via next/font/google)

## Architecture

### App Router Structure

The project uses Next.js App Router with the following organization:

```
app/
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Homepage
  globals.css         # Global styles
```

### Planned Page Structure (from OVERVIEW.md)

The site will expand to include these routes:
- `/` - Home (mission, story, CTAs)
- `/about` - About Sweet Baskets (founder story)
- `/programs` - Programs overview
  - `/programs/children` - Children's Hospital Baskets
  - `/programs/elderly` - Elderly Care Baskets
- `/get-involved` - Volunteer, host drives, partner facilities
- `/donate` - Donation information
- `/impact` - Impact metrics and stories
- `/contact` - Contact form
- `/legal/*` - Privacy, terms, cookies, accessibility, gift policy, nonprofit status
- `/faq` - Frequently asked questions
- `/stories` - Blog/impact stories
- `/press` - Media kit

### Component Architecture

Planned reusable components (to be created):
- `Header.js` - Site navigation
- `Footer.js` - Footer with links to policies
- `Hero.js` - Hero section for landing pages
- `Section.js` - Reusable content sections
- `CTAButton.js` - Call-to-action buttons
- `PageHeader.js` - Page title headers

Material UI provides layout via `<Container>`, `<Box>`, and theme customization.

## Design System

### Theme Guidelines (from OVERVIEW.md)

The visual identity should convey warmth, care, and trust:

- **Color Palette**:
  - Primary: Soft teal/green (hope, care)
  - Secondary: Warm coral (human connection)
  - Neutral: Slate/soft grey

- **Typography**: Clean rounded sans-serif (consider Inter or Nunito)

- **Visual Style**:
  - Rounded corners and gentle shadows
  - Lots of white space
  - Soft, calm aesthetic
  - Natural photography or warm illustrations

### MUI Theme Setup

When implementing the theme:
1. Create `src/theme.js` with custom MUI theme configuration
2. Wrap the app in `<ThemeProvider>` in `app/layout.tsx`
3. Include `<CssBaseline />` for baseline styles

## TypeScript Configuration

- Path alias: `@/*` maps to project root
- Target: ES2017
- Strict mode enabled
- JSX mode: react-jsx (no React import needed in components)

## Content Guidelines

### Homepage Structure

The homepage should include:
1. **Hero Section**:
   - Headline: "Small moments of kindness become lifelines of hope."
   - Tagline about children in hospitals and homebound elderly
   - CTAs: "Give a basket" (primary), "Volunteer" (secondary)

2. **Mission Statement**: 2-3 sentences about personalized care baskets

3. **How It Works**: 3-step process
   - Gather comfort items
   - Assemble with care
   - Deliver with love

4. **Call-to-Action Strip**: "Bring a moment of sweetness to someone who needs it."

5. **Trust Section**: Placeholder metrics (goals, volunteers, partner facilities)

6. **Footer**: Links to policies, mission reminder, 501(c)(3) status

### Legal Pages Required

The site needs these legal/trust pages:
- Privacy policy
- Terms of use
- Cookie policy
- Accessibility statement (WCAG 2.1 AA)
- Gift policy/donation disclaimer
- IRS/Nonprofit status page (note: applying for 501(c)(3))

## Project Status

This is a new project bootstrapped with `create-next-app`. Material UI dependencies are installed but theme customization is pending. The site is currently at the boilerplate stage with placeholder Next.js content.

### Next Implementation Steps

1. Set up Material UI theme with the warm, caring color palette
2. Implement reusable layout components (Header, Footer)
3. Build homepage with mission-focused content
4. Create core pages (About, Get Involved, Donate, Contact)
5. Add legal pages with appropriate disclaimers

## Asset Notes

- Logo available at `/public/sweet-baskets-logo.png`
- Standard Next.js SVG assets in `/public/`
