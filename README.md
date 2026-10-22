# SuperHub AI

An all-in-one web platform blueprint for education, career, business tools, services, freelancing, community, travel, personal finance, document AI, and skill roadmaps.

## Status

This repository is a **starter MVP scaffold**, not a finished production platform. The dashboard and module pages are functional UI/navigation scaffolds. Database schema and integration placeholders are included; authentication, AI calls, real payments, booking workflows, and all domain CRUD still need implementation and testing before production.

## Stack

- Next.js App Router + React + TypeScript
- Responsive CSS design system
- Supabase/PostgreSQL integration foundation
- Zod for input validation
- Lucide icons

## Requirements

- Node.js 20.9+ recommended
- npm
- Git
- A GitHub account

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The dashboard runs without external credentials. Supabase, AI, and payment integrations are intentionally not enabled until configured.

## Project layout

```text
src/
  app/
    api/health/route.ts
    modules/[slug]/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    app-shell.tsx
    module-card.tsx
  lib/
    modules.ts
    supabase/
      browser.ts
      server.ts
supabase/
  schema.sql
docs/
  ARCHITECTURE.md
  ROADMAP.md
```

## GitHub: create a repository and push

Create an empty repository on GitHub named `superhub-ai`. Do not add a README/license from GitHub if you already have these files locally.

Then run from this project folder:

```bash
git init
git add .
git commit -m "Initial SuperHub AI scaffold"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/superhub-ai.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Never push `.env.local`, API keys, passwords, customer data, or production database exports.

## Database setup

1. Create a Supabase project.
2. Review `supabase/schema.sql`.
3. Apply it using the Supabase SQL Editor in a development project.
4. Add the project URL and anon key to `.env.local`.
5. Implement and test policies before storing real users' private data.

**Important:** the schema includes baseline RLS policies, but the full product still requires policy review, authorization tests, backups, and a production security audit.

## Recommended development order

1. Finish authentication, profiles, and roles.
2. Build shared file uploads and usage tracking.
3. Implement the first vertical slice: Study Center + BanglaDoc AI.
4. Add CV builder and CareerPath.
5. Add Smart Business and Finance.
6. Add Service Marketplace, Freelancer Hub, Community, and Travel.
7. Add subscriptions and verified payment webhooks.
8. Add monitoring, accessibility checks, automated tests, backups, and deployment.

## Security checklist

- Keep secrets in local environment variables / deployment secret manager.
- Never expose service-role keys in browser code.
- Validate and authorize every server request.
- Use private storage and short-lived signed URLs for user files.
- Verify payment status server-side; never trust a browser redirect alone.
- Add rate limits and AI usage caps before enabling public AI endpoints.
- Do not store card details yourself.
- Test row-level security using multiple test users.
