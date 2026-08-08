# Natural Blackstrap Molasses

A modern, responsive e-commerce storefront for a natural blackstrap molasses business.

The website is designed to provide customers with a simple, trustworthy, and enjoyable shopping experience — from discovering the product and learning about its nutritional benefits to adding products to a cart and placing an order directly through WhatsApp.

> **100% Natural Blackstrap Molasses — Pure Goodness from Nature.**

---

## 🌿 About the Project

**Natural Blackstrap Molasses** is a frontend e-commerce application built for a real-world small business.

The goal is to create a professional online presence that makes it easy for customers to:

* Discover natural blackstrap molasses products
* Learn about nutritional benefits
* Browse available products
* View detailed product information
* Add products to a shopping cart
* Save their cart between visits
* Read and submit customer reviews
* Ask questions through WhatsApp
* Place orders directly through WhatsApp

The application does **not require a backend**. Cart data, customer reviews, and theme preferences are stored locally in the user's browser using `localStorage`.

---

## ✨ Features

### 🛍️ Shopping Experience

* Product catalogue
* Product search
* Category filtering
* Product details pages
* Product image galleries
* Quantity selection
* Add to cart
* Remove from cart
* Increase/decrease quantity
* Clear cart
* Persistent shopping cart
* Related products
* Empty cart experience

### 💬 WhatsApp Checkout

Instead of processing online payments, customers can send their orders directly to the business through WhatsApp.

The checkout system:

1. Collects customer information
2. Builds the complete order summary
3. Calculates the total
4. Generates a formatted WhatsApp message
5. Encodes the message safely
6. Opens WhatsApp with the order already prepared

This provides a simple ordering experience without requiring a payment gateway or backend.

---

## ⭐ Customer Reviews

Customers can:

* Submit their name
* Select a star rating
* Write a review
* View existing reviews

Reviews are stored locally using `localStorage`.

Because this is currently a frontend-only application, reviews are stored on the individual visitor's device and are **not shared between customers**.

---

## 📱 Responsive Design

The website follows a **mobile-first responsive design approach**.

It is designed to work across:

* Large desktop monitors
* 4K displays
* Laptops
* Tablets
* Smartphones
* Small-screen Android devices
* Older mobile devices
* Very narrow screens and feature-phone browsers where browser capabilities permit

The layout uses fluid containers, responsive typography, flexible grids, and mobile-friendly navigation.

The interface is designed to avoid:

* Horizontal scrolling
* Overlapping content
* Unusable buttons
* Fixed-width layouts
* Broken images
* Overflowing cards

---

## ♿ Accessibility

Accessibility is treated as an important part of the user experience.

The application includes:

* Semantic HTML
* Accessible navigation
* Keyboard-friendly interactions
* Visible focus states
* Proper form labels
* ARIA attributes where necessary
* Accessible buttons
* Screen-reader-friendly content
* Skip-to-content navigation
* Reduced-motion support
* Appropriate image alt text

---

## 🎨 Design System

The visual identity is inspired by the natural, warm, and earthy appearance of blackstrap molasses.

### Brand Colors

| Color          | Hex       |
| -------------- | --------- |
| Background     | `#FFF8F0` |
| Primary Brown  | `#6B3E26` |
| Secondary Gold | `#D79A4E` |
| Accent Cream   | `#F4E2C6` |
| Dark Brown     | `#4B2E1F` |
| WhatsApp Green | `#25D366` |

### Typography

The interface uses modern, readable typography with:

* **Poppins** — headings and display text
* **Inter** — primary body text
* **DM Sans** — supporting labels and UI elements

---

## 🧩 Technology Stack

### Frontend

* **React 19**
* **Vite**
* **Tailwind CSS**
* **React Router DOM**
* **React Context API**

### UI & Interaction

* **Framer Motion**
* **React Icons**
* **Swiper.js**
* **React Toastify**

### Browser Storage

* **LocalStorage**

### Development

* **Node.js**
* **npm**
* **Git**
* **GitHub**

---

## 📂 Project Structure

```text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── ProductCard/
│   ├── ProductGallery/
│   ├── BenefitCard/
│   ├── ReviewCard/
│   ├── FAQ/
│   ├── SearchBar/
│   ├── CategoryFilter/
│   ├── CartItem/
│   ├── QuantitySelector/
│   ├── WhatsAppButton/
│   ├── Newsletter/
│   ├── Loader/
│   └── Skeleton/
│
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Products/
│   ├── ProductDetails/
│   ├── Benefits/
│   ├── HowToUse/
│   ├── Reviews/
│   ├── FAQs/
│   ├── Contact/
│   ├── Cart/
│   └── NotFound/
│
├── context/
│   └── CartContext/
│
├── hooks/
│
├── utils/
│
├── data/
│
├── routes/
│
└── styles/
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js 18 or newer
* npm
* Git

Check your versions:

```bash
node --version
npm --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/natural-blackstrap-molasses.git
```

Move into the project directory:

```bash
cd natural-blackstrap-molasses
```

Install dependencies:

```bash
npm install
```

---

## Development

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

# ⚙️ Business Configuration

Before deploying the website, update the business information.

## WhatsApp Number

Open:

```text
src/utils/whatsapp.js
```

Replace the placeholder business WhatsApp number with the real number.

Use international format without:

* `+`
* spaces
* brackets
* hyphens

Example:

```text
2348012345678
```

---

## Business Contact Information

Update the business:

* Phone number
* WhatsApp number
* Email
* Address
* Business hours

Check the relevant components/pages, including:

```text
src/components/Footer/
src/pages/Contact/
```

---

## Products and Pricing

Product information is maintained in:

```text
src/data/products.js
```

Update:

* Product names
* Prices
* Product sizes
* Descriptions
* Ingredients
* Nutritional information
* Product categories
* Product images

Prices currently use Nigerian Naira (NGN).

---

## Product Images

Place production product photography inside:

```text
src/assets/images/
```

Recommended image categories:

```text
assets/images/
├── products/
├── gallery/
├── hero/
├── lifestyle/
└── logo/
```

Use optimized images and descriptive filenames.

---

## Logo

The website includes a reusable logo component.

When the final brand logo is available, replace the temporary logo with the production logo while keeping the reusable component structure.

---

## Google Maps

The Contact page currently contains a map placeholder.

Before launch, replace the placeholder with the business's actual Google Maps embed.

---

# 💾 LocalStorage

The application currently uses browser `localStorage` for frontend persistence.

### Shopping Cart

```text
nbm_cart_v1
```

Stores the customer's current shopping cart.

### Customer Reviews

```text
nbm_reviews_v1
```

Stores reviews submitted by visitors on their device.

### Theme Preference

```text
nbm_theme
```

Stores the user's light/dark mode preference.

> **Important:** Because there is no backend, LocalStorage data belongs only to the individual browser/device. It does not synchronize between customers or devices.

---

# 🔐 Security

This project currently operates entirely on the frontend.

Do not place sensitive information inside the source code.

Never commit:

```text
.env
.env.local
API secrets
private keys
database credentials
passwords
authentication tokens
```

Sensitive environment files should remain excluded through `.gitignore`.

---

# 📈 SEO & Performance

The website is structured with SEO and performance in mind.

Implemented or planned optimizations include:

* Semantic HTML
* SEO-friendly page titles
* Meta descriptions
* Open Graph metadata
* Descriptive image alt text
* Lazy-loaded images
* Responsive images
* Route-based code splitting
* Lightweight reusable components
* Optimized production builds
* Accessible navigation
* Reduced-motion support

---

# 🩺 Health & Nutritional Disclaimer

The website presents blackstrap molasses as a food and nutritional product.

It does not make medical treatment or disease-curing claims.

The following disclaimer should remain visible where appropriate:

> This product is a food and nutritional supplement. It is not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare professional for medical advice.

---

# 🛠️ Current Project Status

**Status: Active Development**

### Completed

* [x] React application setup
* [x] Vite development environment
* [x] Tailwind CSS setup
* [x] React Router
* [x] Shopping cart architecture
* [x] LocalStorage persistence
* [x] WhatsApp checkout architecture
* [x] Responsive design system
* [x] Accessibility foundations
* [x] Product data structure
* [x] Customer review persistence
* [x] Dark mode architecture
* [x] Animation system
* [x] Swiper integration
* [x] Toast notifications
* [x] Dependency installation
* [x] Security audit — **0 vulnerabilities**

### In Progress

* [ ] Final product photography
* [ ] Final business information
* [ ] Final logo and branding
* [ ] Production WhatsApp number
* [ ] Google Maps integration
* [ ] Final content review
* [ ] Production deployment

---

# 🚀 Future Improvements

Potential future upgrades include:

* Backend API
* Database integration
* Admin dashboard
* Real customer review system
* Customer accounts
* Order management
* Inventory management
* Payment gateway
* Delivery tracking
* Email notifications
* SMS notifications
* Analytics dashboard
* Product inventory alerts
* Cloud image storage
* Automated order management

The current architecture is intentionally structured so these features can be introduced later without rebuilding the entire frontend.

---

# 🤝 Contributing

This project is currently being developed for a real business.

If you would like to contribute:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Test the application
5. Commit your changes

```bash
git commit -m "Add: your feature"
```

6. Push your branch

```bash
git push origin feature/your-feature
```

7. Open a Pull Request

---

# 📄 License

This project is currently intended for the business owner's use.

A formal open-source license can be added when the project ownership and distribution requirements are finalized.

---

# 👨‍💻 Developer

Built with ❤️ using modern React technologies.

**Rasheed Ayomide**

Full Stack Developer

---

## ⭐ Project Vision

The goal of Natural Blackstrap Molasses is simple:

> **Make it easy for people to discover, understand, and order quality natural blackstrap molasses from a business they can trust.**

The project combines a clean modern shopping experience with simple WhatsApp ordering, making it accessible to customers without requiring a complicated checkout or account creation process.
