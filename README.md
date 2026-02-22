# IAE Universal Intelligence Engine

Production-oriented starter for **IAE Theory (Information → Action → Existence)** and **DEO (Dynamic Existence Optimization)**.

## Implemented MVP Scope

- Next.js 14 full-stack app with API routes
- Tailwind dark/deep-blue/gold design system
- Framer Motion module cards
- Recharts radar scoring visualization
- React Flow theory map
- IAE learning modules (5 modules)
- Universal theory comparison endpoint with OpenAI + local fallback
- Personal optimization simulator based on `Optimized Existence = f(Information, Action, Time)`
- AI research assistant endpoint with mode support
- JWT role-based login payload endpoint
- PostgreSQL schema for core relational entities
- MongoDB collection map for dynamic research data

## Tech Stack

- **Frontend:** Next.js (React), Tailwind CSS, Framer Motion, Recharts, React Flow
- **Backend:** Next.js API Routes (Node runtime)
- **Databases:** PostgreSQL schema + MongoDB collection contracts
- **Auth:** JWT-based login route with role payload
- **AI Layer:** OpenAI API integration + structured prompt templates
- **Deployment Targets:** Netlify (configured), Vercel + Supabase/Railway/Render compatible

## App Structure

- `app/page.tsx` — Main dashboard
- `components/` — Learning modules, comparison engine, simulator, scoring, mapping
- `app/api/` — `compare`, `simulate`, `assistant`, `auth/login`
- `lib/` — Prompt templates, simulator logic, type contracts, AI client
- `db/postgres/schema.sql` — Relational schema
- `db/mongodb/collections.ts` — Dynamic collections
- `netlify.toml` — Netlify build/runtime config for Next.js

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required Environment Variables

```bash
OPENAI_API_KEY=...
JWT_SECRET=...
DATABASE_URL=postgresql://...
```

If `OPENAI_API_KEY` is missing, the comparison and assistant routes return safe fallback responses.

## Netlify Deployment

This repository is now configured to run on Netlify with the Next.js runtime plugin.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Create a new site in Netlify and connect the repository.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Runtime plugin: `@netlify/plugin-nextjs`
   - Node version: `20`
4. Add environment variables in **Site settings → Environment variables**:
   - `OPENAI_API_KEY`
   - `JWT_SECRET`
   - `DATABASE_URL`
5. Deploy.

Useful local commands:

```bash
npm run netlify:dev
npm run netlify:build
```

## Planned Next Steps

1. Add persistent Postgres + MongoDB adapters to API routes
2. Add vector embeddings for universal-theory semantic search
3. Add document upload and citation pipeline
4. Add analytics dashboard (heatmaps, trend lines, cohort analysis)
5. Add premium subscription and API monetization layer
6. Add blockchain extension module (future)
