import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo.jsx';
import { useCart } from '../../context/CartContext/CartContext.jsx';
import { useDarkMode } from '../../hooks/useDarkMode.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/how-to-use', label: 'How To Use' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-label font-medium transition-colors ${
      isActive ? 'text-primary dark:text-secondary' : 'text-bark/70 hover:text-primary dark:text-cream/70 dark:hover:text-secondary'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-cream/90 dark:bg-bark/90 backdrop-blur-md ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between xs:h-[72px]" aria-label="Main navigation">
        <Logo />

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 xs:gap-2">
          <button
            type="button"
            onClick={() => setIsDark((d) => !d)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full text-bark/70 hover:bg-accent/60 dark:text-cream/80 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>

          <NavLink
            to="/cart"
            aria-label={`Cart, ${totalItems} item${totalItems === 1 ? '' : 's'}`}
            className="relative grid h-10 w-10 place-items-center rounded-full text-bark/70 hover:bg-accent/60 dark:text-cream/80 dark:hover:bg-white/10 transition-colors"
          >
            <FiShoppingBag size={19} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-secondary px-1 text-[10px] font-bold text-bark">
                {totalItems}
              </span>
            )}
          </NavLink>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-bark/80 hover:bg-accent/60 dark:text-cream/80 dark:hover:bg-white/10 lg:hidden transition-colors"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden border-t border-accent/60 dark:border-white/10 bg-cream dark:bg-bark"
          >
            <ul className="container-page flex flex-col py-3">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-base font-label ${
                        isActive ? 'text-primary font-semibold dark:text-secondary' : 'text-bark/80 dark:text-cream/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
