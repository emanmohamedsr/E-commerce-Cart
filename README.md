# E-Commerce Store 🛍️

A modern React-based e-commerce application with Redux state management, featuring product listings, cart functionality, and responsive design.

## => (Vercel Live Demo)[https://e-commerce-cart-tau.vercel.app/]

## Features ✨

- **Product Catalog**

  - Fetch and display products from FakeStoreAPI
  - Responsive grid layout with product cards
  - skeleton loading animations

- **Shopping Cart** 🛒

  - Add/remove products
  - Quantity management
  - Real-time cart counter in navbar
  - Responsive cart table view

- **UI/UX**
  - Fixed navigation bar
  - Bootstrap 5 styling
  - Mobile-responsive design
  - Interactive elements with hover effects

## Technologies Used 🛠️

- **Frontend**

  - vite
  - React 18
  - Redux Toolkit (State management)
  - React Router v6 (Navigation)
  - Bootstrap 5 (Styling)
  - Bootstrap Icons

- **API**
  - [FakeStoreAPI](https://fakestoreapi.com) (Mock product data)

## Project Structure 📂

src/
├── Components/
│ ├── Carousel.jsx  
│ ├── NavBar.jsx  
│ ├── Product.jsx  
│ └── ProductSkeleton.jsx
├── Pages/
│ ├── Home.jsx  
│ ├── ProductsPage.jsx
│ └── CartPage.jsx
├── ReduxToolkit/
│ ├── Slices/
│ │ ├── CartSlice.jsx
│ │ └── ProductsSlice.jsx
│ └── store.jsx
└── App.jsx
└── main.jsx
