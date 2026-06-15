# 🎮 Game Sticker Store

A personal e-commerce store for buying game-themed stickers. Built as a portfolio project to showcase full-stack development with modern web technologies.

---

## 🖥️ Live Demo

 https://www.Naijastore.vercel.app_

---


## ✨ Features

- 🛍️ Browse and purchase game-themed stickers
- 🛒 Shopping cart with real-time updates
- 💳 Secure checkout powered by Stripe
- 📦 Product listing and detail pages
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework (SSR + routing) |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [FantaCSS](https://fantacss.dev/) | Styling and UI components |
| [Stripe](https://stripe.com/) | Payment processing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Stripe account (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> ⚠️ Never commit your `.env.local` file. It is already listed in `.gitignore`.

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/              # Next.js app directory (pages & layouts)
├── components/       # Reusable UI components
├── public/           # Static assets (images, icons)
├── styles/           # Global styles
└── lib/              # Utility functions (e.g. Stripe helpers)
```

---

## 💳 Stripe Setup

This project uses Stripe for payment processing. To test payments locally:

1. Use Stripe's test card: `4242 4242 4242 4242`
2. Any future expiry date and any 3-digit CVC
3. Check your [Stripe Dashboard](https://dashboard.stripe.com/) to verify test transactions

---

## 🙋 About

This is a personal portfolio project built to practice building a full-stack e-commerce app. Not intended for commercial use.

---

## 📄 License

This project is for personal/portfolio use. Feel free to use it as inspiration for your own projects.