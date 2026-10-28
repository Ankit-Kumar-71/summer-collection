# Summer Collection

A responsive e-commerce storefront built with React, Vite and Tailwind CSS. It has a home page with promotional sliders, a shop page with live product data, a shopping cart, and login, sign-up and contact pages.

This is a front-end demo project. See [Current Status](#current-status) for what is and isn't wired up yet.

## Features

- **Home page** with a hero banner, featured products, a scrolling brand marquee, a category showcase and a horizontally scrollable offers slider
- **Logo loader** shown once per browser session on first visit
- **Login / Sign Up popup** shown 10 seconds after the home page loads (once per session)
- **Shop page** that loads products from a public API
- **Shopping cart** built with React Context: add items, see the item count badge in the navbar, change quantities and view the running total
- **Login, Sign Up and Contact pages** with styled forms
- **Responsive navbar** that shrinks into a floating bar on scroll, with a full-screen mobile menu
- Smooth animations using Framer Motion and Tailwind keyframes

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19, Vite 6 |
| Routing | React Router 7 |
| State | React Context API |
| Styling | Tailwind CSS 3, `tailwind-scrollbar-hide`, PostCSS |
| Animation | Framer Motion |
| Icons | lucide-react |
| Linting | ESLint 9 |

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/shop` | Shop (products from API) |
| `/cart` | Cart |
| `/contact` | Contact |
| `/login` | Login |
| `/signup` | Sign Up |

## Project Structure

```
.
├── public/                    # Logo and static images
├── src/
│   ├── components/            # Navbar, Footer, Hero, BrandSlider, BeautySlider, Last
│   ├── context/
│   │   └── CartContext.jsx    # Cart state (cart items, addToCart)
│   ├── pages/                 # Home, Shop, Products, Cart, Contact, Login, SignUp
│   ├── App.jsx                # Routes and layout
│   ├── main.jsx               # Entry point, wraps the app in CartProvider
│   └── index.css              # Tailwind directives and custom utilities
├── index.html
├── tailwind.config.js
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Ankit-Kumar-71/summer-collection.git
cd summer-collection
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

No environment variables are required.

## Data Sources

- The **Shop** page fetches products from the public [Platzi Fake Store API](https://fakeapi.platzi.com/) (`https://api.escuelajs.co/api/v1/products`), so it needs an internet connection.
- The **Latest Products** section on the home page uses a small hard-coded list in `src/pages/Products.jsx`.
- Banner, brand and category images are loaded from third-party URLs and belong to their respective owners. They are used here for demonstration only. Replace them with your own assets before using this project commercially.

## Current Status

This project is a UI-focused demo. These parts are not implemented yet:

- Login, Sign Up and the Contact form are UI only and do not submit data anywhere
- The "Proceed to Checkout" button has no payment or order flow
- The cart is stored in memory, so it resets when the page is refreshed
- Removing items from the cart is not connected in `CartContext`

## Roadmap

- Connect authentication (login and sign up)
- Add `removeFromCart` and quantity handling to the cart context
- Persist the cart in `localStorage`
- Make the contact form send messages
- Add checkout and order flow

## Author

**Ankit Kumar**

- GitHub: [@Ankit-Kumar-71](https://github.com/Ankit-Kumar-71)
- Portfolio: [ankitdeveloper.vercel.app](https://ankitdeveloper.vercel.app)
- LinkedIn: [ankitkumar71](https://www.linkedin.com/in/ankitkumar71)
