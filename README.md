# Naijastore — Game Sticker E-Commerce Store

[![CI](https://github.com/stacknerdjoe/nextjs-ecommerce-store/actions/workflows/ci.yml/badge.svg)](https://github.com/stacknerdjoe/nextjs-ecommerce-store/actions/workflows/ci.yml)

A full-stack e-commerce platform for game-themed stickers, built with Next.js 16, TypeScript, Stripe, Auth.js and Supabase PostgreSQL. Designed as a production-grade portfolio project demonstrating modern web development practices.

🔗 **Live Demo:** [naijastore-se.vercel.app](https://www.naijastore.vercel.app)

---

## Features

- **Product catalogue** — browse and purchase game-themed stickers with responsive product listings
- **Shopping cart** — real-time cart updates with React Context
- **Secure checkout** — Stripe-powered payment processing with SEK pricing
- **Authentication** — email/password and Google OAuth via Auth.js with protected routes
- **User dashboard** — order history, profile info, and session management
- **CI/CD pipeline** — automated type checking, linting, and build validation on every push
- **Type safe** — fully migrated to TypeScript across the entire codebase

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework — App Router, SSR, API routes |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript across the full stack |
| [Auth.js (NextAuth v5)](https://authjs.dev/) | Authentication — Google OAuth + credentials |
| [Prisma](https://www.prisma.io/) | ORM for database access |
| [Supabase](https://supabase.com/) | Hosted PostgreSQL database |
| [Stripe](https://stripe.com/) | Payment processing |
| [FantaCSS](https://fantacss.dev/) | Styling and UI components |
| [GitHub Actions](https://github.com/features/actions) | CI pipeline — lint, type check, build |

---

## Project Structure

```
├── .github/workflows/
│   └── ci.yml                  # GitHub Actions CI pipeline
├── app/
│   ├── api/
│   │   ├── auth/               # Auth.js route handlers + register endpoint
│   │   ├── checkout/route.ts   # POST — creates Stripe checkout session
│   │   └── products/route.ts   # GET — fetches active Stripe products
│   ├── auth/
│   │   ├── login/page.tsx      # Login page (email/password + Google)
│   │   └── register/page.tsx   # Registration page
│   ├── cart/page.tsx           # Shopping cart
│   ├── dashboard/page.tsx      # Protected user dashboard + order history
│   ├── success/page.tsx        # Post-purchase confirmation
│   └── layout.tsx              # Root layout
├── components/
│   ├── Navbar.tsx              # Auth-aware navbar (server component)
│   ├── Cart.tsx                # Cart icon with item count
│   ├── ImageBanner.tsx         # Hero banner
│   └── Products.tsx            # Product listings
├── context/
│   └── ProductContext.tsx      # Cart state (React Context)
├── lib/
│   └── db.ts                   # Prisma client singleton
├── prisma/
│   └── schema.prisma           # Database schema (User, Order, Product)
├── types/
│   └── index.ts                # Shared TypeScript types
├── auth.ts                     # Auth.js configuration
├── middleware.ts               # Route protection middleware
└── tsconfig.json               # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- A Stripe account
- A Supabase project (free tier works)
- A Google Cloud project with OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/stacknerdjoe/nextjs-ecommerce-store.git

# Navigate into the project
cd nextjs-ecommerce-store

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Database — Supabase PostgreSQL
DATABASE_URL=postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres

# Auth.js — generate with: npx auth secret
AUTH_SECRET=your_auth_secret

# Google OAuth — console.cloud.google.com
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Stripe — dashboard.stripe.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to Supabase
npx prisma db push
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Authentication

The app supports two sign-in methods:

- **Email + password** — users register at `/auth/register`, passwords are hashed with bcrypt
- **Google OAuth** — one-click sign in via Google, requires redirect URI `http://localhost:3000/api/auth/callback/google` in your Google Cloud Console

Protected routes (`/dashboard`, `/checkout`, `/orders`) are secured via Next.js middleware. Unauthenticated users are redirected to `/auth/login`.

---

## Stripe Setup

Test payments locally using Stripe's test card:

- **Card number:** `4242 4242 4242 4242`
- **Expiry:** any future date
- **CVC:** any 3 digits

Verify transactions in your [Stripe Dashboard](https://dashboard.stripe.com/).

---

## CI Pipeline

Every push to `main` and every pull request automatically runs:

1. `npx tsc --noEmit` — TypeScript type checking
2. `npm run lint` — ESLint code quality checks
3. `next build` — full production build validation

Pipeline configuration: `.github/workflows/ci.yml`

---

## License

This project is for personal and portfolio use. Feel free to use it as inspiration for your own projects.