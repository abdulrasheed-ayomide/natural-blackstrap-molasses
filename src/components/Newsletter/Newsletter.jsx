import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

export default function Newsletter({ variant = 'section' }) {
  const [email, setEmail] = useState('');
  const [subscriberCount, setSubscriberCount] = useLocalStorage('newsletter_subscribers', 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're subscribed! Thank you for joining us.");
    setEmail('');
    setSubscriberCount((count) => count + 1);
  };

  const isFooter = variant === 'footer';

  return (
    <div className={isFooter ? 'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between' : ''}>
      <div>
        <h3 className={`font-display font-semibold ${isFooter ? 'text-cream text-lg' : 'text-bark dark:text-cream text-xl xs:text-2xl'}`}>
          Join our wellness list
        </h3>
        <p className={`mt-1 text-sm ${isFooter ? 'text-cream/70' : 'text-bark/70 dark:text-cream/70'}`}>
          Recipes, natural health tips and early access to new sizes.
        </p>
        {isFooter && (
          <p className="mt-2 text-sm text-cream/70">{subscriberCount} subscribers</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex w-full max-w-md gap-2 sm:mt-0" noValidate>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full min-w-0 rounded-full border px-4 py-2.5 text-sm outline-none transition-colors ${
            isFooter
              ? 'border-white/20 bg-white/10 text-cream placeholder:text-cream/40 focus:border-secondary'
              : 'border-primary/20 bg-white text-bark placeholder:text-bark/40 focus:border-primary'
          }`}
        />
        <button type="submit" className="btn-primary !px-4 shrink-0" aria-label="Subscribe to newsletter">
          <FiSend />
          <span className="hidden xs:inline">Join</span>
        </button>
      </form>
    </div>
  );
}
