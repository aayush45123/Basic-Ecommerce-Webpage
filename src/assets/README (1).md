# 🛒 Basic Ecommerce Web App

This is a professional, Amazon-like ecommerce web application built using **React.js**, **Vite**, and **Context API**. It includes cart functionality, product pages, and payment simulation, and is styled for a clean and responsive user experience.

## 📁 Project Structure

```
ecommerce-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cards/
│   │   │   ├── Cards.jsx
│   │   │   └── Cards.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   ├── Title/
│   │   ├── Footer/
│   ├── context/
│   │   ├── ProductsContext.jsx
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Men.jsx
│   │   ├── Women.jsx
│   │   ├── Kids.jsx
│   │   ├── About.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   └── Payment.jsx
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🧠 Concepts Used

- **ReactJS**: Frontend library for building UI components.
- **React Router v6**: Client-side routing for navigation (e.g. Home, Men, Product Detail).
- **Context API**: Used for global state management (e.g. product data, cart).
- **useEffect & useState**: For side effects and dynamic state updates.
- **Dynamic Routing with Params**: `/product/:id` to render details for each product.
- **Fake Store API (dummyjson)**: Used for fetching product data.
- **Cart System**: Add/remove items using Context API and persistent state.
- **Buy Now Flow**: Redirect to a Payment page with product info.
- **Responsive Design**: Designed to work across screen sizes.
- **GitHub Pages Deployment**: Deployed via `gh-pages` for public access.

## ⚙️ Installation & Setup

```bash
git clone https://github.com/aayush45123/Basic-Ecommerce-Webpage.git
cd Basic-Ecommerce-Webpage
npm install
npm run dev
```

## 🚀 Deployment on GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:

```json
"homepage": "https://aayush45123.github.io/Basic-Ecommerce-Webpage",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Push to GitHub and deploy:

```bash
npm run deploy
```

## 💻 Live Demo

👉 [Visit Live Site](https://aayush45123.github.io/Basic-Ecommerce-Webpage)

## 📩 Feedback & Contribution

Pull requests are welcome. For major changes, please open an issue first.

---

**© 2025 Aayush** — Built for educational and portfolio purposes.