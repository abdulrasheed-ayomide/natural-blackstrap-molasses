import { lazy } from 'react';

export const Home = lazy(() => import('../pages/Home/Home.jsx'));
export const About = lazy(() => import('../pages/About/About.jsx'));
export const Products = lazy(() => import('../pages/Products/Products.jsx'));
export const ProductDetails = lazy(() => import('../pages/ProductDetails/ProductDetails.jsx'));
export const Benefits = lazy(() => import('../pages/Benefits/Benefits.jsx'));
export const HowToUse = lazy(() => import('../pages/HowToUse/HowToUse.jsx'));
export const Reviews = lazy(() => import('../pages/Reviews/Reviews.jsx'));
export const FAQs = lazy(() => import('../pages/FAQs/FAQs.jsx'));
export const Contact = lazy(() => import('../pages/Contact/Contact.jsx'));
export const Cart = lazy(() => import('../pages/Cart/Cart.jsx'));
export const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx'));
