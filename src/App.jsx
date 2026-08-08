import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';
import BackToTopButton, { ScrollToTopOnRouteChange } from './components/ScrollToTop/ScrollToTop.jsx';
import Loader from './components/Loader/Loader.jsx';

import {
  Home,
  About,
  Products,
  ProductDetails,
  Benefits,
  HowToUse,
  Reviews,
  FAQs,
  Contact,
  Cart,
  NotFound,
} from './routes/routes.js';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-bark dark:bg-bark dark:text-cream">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>

      <ScrollToTopOnRouteChange />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTopButton />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        newestOnTop
        theme="colored"
        toastClassName="!rounded-2xl !font-body"
      />
    </div>
  );
}

export default App;
