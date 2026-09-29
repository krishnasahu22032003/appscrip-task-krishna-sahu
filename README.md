# Appscrip Product Listing Page

A responsive product listing page (PLP) built for the Appscrip frontend assignment using Next.js, TypeScript, and plain CSS. Products are fetched on the server using Server-Side Rendering (SSR) from a mock product API.

**Live Demo:** <your-netlify-url>

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Build for Production](#build-for-production)
- [Project Structure](#project-structure)
- [Server-Side Rendering](#server-side-rendering)
- [Responsive Design](#responsive-design)
- [SEO](#seo)
- [API](#api)
- [Deployment](#deployment)
- [Assignment](#assignment)
- [Author](#author)

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Plain CSS (no CSS framework)
- Server-Side Rendering (SSR)
- Mock product API ([Fake Store API]("https://dummyjson.com/products/"))

---

## Features

- Responsive layouts for desktop, tablet, and mobile
- Server-side product fetching (SSR)
- Product filtering sidebar
- Hide/Show filter toggle
- Recommended sorting dropdown
- Wishlist heart interaction on product cards
- Responsive footer matching the design
- Mobile footer accordion
- SEO-friendly page structure
- Lazy-loaded product images
- Minimal dependencies and a small DOM

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
```

Open the app in your browser:

```
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
app/
├── page.tsx
└── globals.css

components/
├── Header.tsx
├── Footer.tsx
├── ProductListing.tsx
├── ProductSidebar.tsx
├── ProductGrid.tsx
└── ProductCard.tsx

lib/
└── api.ts

types/
└── product.ts
```

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Server component that fetches products and renders the page |
| `app/globals.css` | All styles, including responsive breakpoints |
| `components/Header.tsx` | Site header and navigation |
| `components/Footer.tsx` | Responsive footer with mobile accordion |
| `components/ProductListing.tsx` | Listing wrapper handling filter and sort state |
| `components/ProductSidebar.tsx` | Filter groups |
| `components/ProductGrid.tsx` | Product grid layout |
| `components/ProductCard.tsx` | Single product card with wishlist toggle |
| `lib/api.ts` | Product data fetching |
| `types/product.ts` | Shared TypeScript types |

---

## Server-Side Rendering

Products are fetched inside an async server component, so the product HTML is rendered on the server and sent to the browser fully populated. This improves first paint and lets search engines read the product content.

```tsx
export default async function Home() {
  const products = await getProducts();
  ...
}
```

Only the interactive parts (filters, sorting, wishlist, footer accordion, newsletter field) use client-side state.

---

## Responsive Design

| Breakpoint | Layout |
| --- | --- |
| Desktop (1200px and above) | Sidebar with a three-column product grid and the full footer |
| Tablet (768px to 1199px) | Narrower sidebar and tighter spacing |
| Mobile (767px and below) | Two-column grid, filter toolbar, and footer accordion |

---

## SEO

- Page title and meta description
- One `h1` and structured `h2` headings
- Semantic HTML (`header`, `main`, `nav`, `section`, `footer`)
- Descriptive alt text on all product images
- SEO-friendly image names
- Lazy-loaded images
- Schema markup

---

## API

Product data comes from the Fake Store API:

```
https://dummyjson.com/products
```

The fetching logic lives in `lib/api.ts`, and the product type is defined in `types/product.ts`.

---

## Deployment

The project is deployed on Netlify.

1. Push the repository to GitHub.
2. Import the repository in Netlify.
3. Use the default Next.js build settings.
4. Deploy.

---

## Assignment

Implemented according to the provided Appscrip Product Listing Page design, with responsive support for mobile and tablet and SSR demonstrated through server-side product fetching. Styling uses plain CSS only, with no CSS framework.

---

## Author

**<Krishna sahu>**