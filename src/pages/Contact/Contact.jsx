import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SEO from '../../components/SEO/SEO.jsx';
import { getWhatsAppContactUrl } from '../../utils/whatsapp.js';

const businessHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.message.trim()) errs.message = 'Please enter a message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Natural Blackstrap Molasses — call, email, WhatsApp us, or send a message directly."
        path="/contact"
      />

      <section className="bg-accent/40 py-12 text-center xs:py-16 dark:bg-white/5">
        <div className="container-page">
          <span className="section-eyebrow">We'd Love to Hear From You</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-bark dark:text-cream xs:text-5xl">Contact Us</h1>
        </div>
      </section>

      <section className="container-page py-14 xs:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-card dark:bg-white/5">
              <h2 className="font-display text-lg font-semibold text-bark dark:text-cream">Get in Touch</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <FiPhone className="mt-0.5 shrink-0 text-primary dark:text-secondary" />
                  <a href="tel:+2349162231321" className="text-bark/75 hover:text-primary dark:text-cream/75">
                    +234 916 223 1321
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaWhatsapp className="mt-0.5 shrink-0 text-primary dark:text-secondary" />
                  <a href={getWhatsAppContactUrl()} target="_blank" rel="noreferrer" className="text-bark/75 hover:text-primary dark:text-cream/75">
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="mt-0.5 shrink-0 text-primary dark:text-secondary" />
                  <a href="mailto:hello@naturalblackstrapmolasses.com" className="break-all text-bark/75 hover:text-primary dark:text-cream/75">
                    hello@naturalblackstrapmolasses.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 shrink-0 text-primary dark:text-secondary" />
                  <span className="text-bark/75 dark:text-cream/75">12 Harvest Lane, Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-card dark:bg-white/5">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-bark dark:text-cream">
                <FiClock className="text-primary dark:text-secondary" /> Business Hours
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {businessHours.map((b) => (
                  <li key={b.day} className="flex justify-between text-bark/75 dark:text-cream/75">
                    <span>{b.day}</span>
                    <span className="font-medium">{b.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-card">
              <div
                role="img"
                aria-label="Map placeholder showing our business location in Lagos, Nigeria"
                className="grid h-48 w-full place-items-center bg-accent text-primary/60 dark:bg-white/5"
              >
                <div className="text-center">
                  <FiMapPin size={28} className="mx-auto" />
                  <p className="mt-2 text-sm">Map placeholder — 12 Harvest Lane, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-fit rounded-3xl bg-white p-6 shadow-card xs:p-8 dark:bg-white/5">
            <h2 className="font-display text-lg font-semibold text-bark dark:text-cream">Send a Message</h2>
            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  className="w-full rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  className="w-full rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  className="w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
