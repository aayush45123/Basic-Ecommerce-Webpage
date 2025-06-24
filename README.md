# 🛒 Basic E-Commerce Webpage

A fully functional E-Commerce website built with **React**, **Vite**, and **Context API**, showcasing products with category-based filtering, cart management, and payment simulation. The app fetches live data from the [DummyJSON API](https://dummyjson.com/) and mimics features of real-world platforms like Amazon.

🔗 **Live Demo**: [https://aayush45123.github.io/Basic-Ecommerce-Webpage](https://aayush45123.github.io/Basic-Ecommerce-Webpage)

---

## 📌 Features

- 📦 Product Listing by Category (Men, Women, Kids, etc.)
- 🔍 Dynamic Product Detail Page
- 🛒 Add to Cart Functionality
- 💳 Payment Page Simulation
- ✅ Thank You Page After Checkout
- 📂 State Management using Context API
- ⚙️ Fully Responsive & Styled with Custom CSS
- 🚀 GitHub Pages Deployment with Vite

---

## 🛠️ Technologies & Concepts Used

| Concept                | Why Used                                   | Where Used                                         |
|------------------------|--------------------------------------------|---------------------------------------------------|
| **React**              | UI building using reusable components      | Entire frontend code                              |
| **Vite**               | Fast bundler & dev server                  | Project setup and performance                     |
| **React Router DOM**   | SPA routing/navigation                     | `App.jsx`, `routes`, Navbar, `useParams`          |
| **Context API**        | Global state (cart & product category)     | `ProductsContext`, `CartContext`                  |
| **useState & useEffect** | Managing state & lifecycle               | Fetching products, handling cart, page setup      |
| **DummyJSON API**      | Product data without creating backend      | Cards, ProductDetail, dynamic routes              |
| **React Icons**        | Modern icon set                            | Navbar, buttons                                   |
| **GitHub Pages**       | Deploy React SPA easily                    | `vite.config.js`, `gh-pages` setup                |

---

## 📂 Project Structure
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


## 📦 Installation & Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/aayush45123/Basic-Ecommerce-Webpage.git
cd Basic-Ecommerce-Webpage

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

---

## 🚀 Deployment Instructions

1. **Install gh-pages**
   \`\`\`bash
   npm install gh-pages --save-dev
   \`\`\`

2. **Update vite.config.js**
   \`\`\`js
   export default defineConfig({
     base: '/Basic-Ecommerce-Webpage/',
     plugins: [react()],
   })
   \`\`\`

3. **Add deploy scripts in package.json**
   \`\`\`json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   \`\`\`

4. **Deploy**
   \`\`\`bash
   npm run deploy
   \`\`\`

---

## 🧠 Future Improvements

- 🔐 User Authentication (Login/Signup)
- 🧾 Order History
- 🛍 Wishlist Functionality
- 📊 Admin Dashboard
- 💬 Product Reviews

---

## 📸 Screenshots

> _Add screenshots of home, product details, cart, payment page here for better presentation_

---

## 📃 License

This project is open-sourced under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Made with ❤️ by **Aayush Bharda**
