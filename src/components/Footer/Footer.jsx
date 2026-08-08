import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Logo from '../Logo.jsx';
import Newsletter from '../Newsletter/Newsletter.jsx';
import DripDivider from '../DripDivider.jsx';

const explore = [
  { to: '/products', label: 'Products' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/how-to-use', label: 'How To Use' },
  { to: '/reviews', label: 'Reviews' },
];

const company = [
  { to: '/about', label: 'About Us' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
  { to: '/cart', label: 'Cart' },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-bark text-cream/90">
      <DripDivider tone="cream" />
      <div className="bg-bark">
        <div className="container-page py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo className="[&_span:first-child]:text-cream [&_span:last-child]:text-secondary" />
              <p className="mt-4 text-sm text-cream/70 leading-relaxed max-w-xs">
                Slow-simmered, unsulphured blackstrap molasses, bottled naturally for families who care what
                goes into their food.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow us on Instagram"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-bark transition-colors"
                >
                  <FiInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow us on Facebook"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-secondary hover:text-bark transition-colors"
                >
                  <FiFacebook />
                </a>
              </div>
            </div>

            <nav aria-label="Explore">
              <h3 className="font-label text-sm font-semibold uppercase tracking-wider text-secondary">Explore</h3>
              <ul className="mt-4 space-y-3">
                {explore.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-cream/75 hover:text-cream transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <h3 className="font-label text-sm font-semibold uppercase tracking-wider text-secondary">Company</h3>
              <ul className="mt-4 space-y-3">
                {company.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-cream/75 hover:text-cream transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="font-label text-sm font-semibold uppercase tracking-wider text-secondary">Get in touch</h3>
              <ul className="mt-4 space-y-3 text-sm text-cream/75">
                <li className="flex items-start gap-2.5">
                  <FiPhone className="mt-0.5 shrink-0" aria-hidden="true" />
                  <a href="tel:+2349162231321" className="hover:text-cream">+234 916 223 1321</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiMail className="mt-0.5 shrink-0" aria-hidden="true" />
                  <a href="mailto:ayomiderasheed226@gmail.com" className="hover:text-cream break-all">
                    ayomiderasheed226@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiMapPin className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span> Ilogbo, Ojo, Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <Newsletter variant="footer" />
          </div>

          <p className="mt-10 text-center text-xs text-cream/50">
            © {new Date().getFullYear()} Natural Blackstrap Molasses. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
