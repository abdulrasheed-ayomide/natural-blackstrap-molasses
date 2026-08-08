import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';
import SEO from '../../components/SEO/SEO.jsx';
import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';
import { testimonials } from '../../data/testimonials.js';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';
import { staggerContainer, fadeUp, revealViewport } from '../../hooks/useScrollReveal.js';

export default function Reviews() {
  const [customerReviews, setCustomerReviews] = useLocalStorage('nbm_reviews_v1', []);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({});

  const allReviews = [...customerReviews, ...testimonials];

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!text.trim() || text.trim().length < 10) errs.text = 'Please write at least 10 characters.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newReview = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      rating,
      text: text.trim(),
    };
    setCustomerReviews((prev) => [newReview, ...prev]);
    setName('');
    setText('');
    setRating(5);
    toast.success('Thank you — your review has been posted!');
  };

  return (
    <>
      <SEO
        title="Customer Reviews"
        description="Read what customers say about our natural blackstrap molasses, and share your own review."
        path="/reviews"
      />

      <section className="bg-accent/40 py-12 text-center xs:py-16 dark:bg-white/5">
        <div className="container-page">
          <span className="section-eyebrow">Loved by Families</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-bark dark:text-cream xs:text-5xl">Customer Reviews</h1>
          <p className="mx-auto mt-3 max-w-xl text-bark/65 dark:text-cream/65">
            {allReviews.length} customers have shared their experience. Add yours below.
          </p>
        </div>
      </section>

      <section className="container-page py-14 xs:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Review Form */}
          <div className="h-fit rounded-3xl bg-white p-6 shadow-card xs:p-8 dark:bg-white/5">
            <h2 className="font-display text-xl font-semibold text-bark dark:text-cream">Write a Review</h2>
            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-5">
              <div>
                <label htmlFor="review-name" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                  Your Name
                </label>
                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'review-name-error' : undefined}
                  className="w-full rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                  placeholder="e.g. Amaka O."
                />
                {errors.name && (
                  <p id="review-name-error" className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">Your Rating</span>
                <div className="flex gap-1" role="radiogroup" aria-label="Star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      role="radio"
                      aria-checked={rating === star}
                      aria-label={`${star} star${star > 1 ? 's' : ''}`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 text-secondary"
                    >
                      <FiStar size={24} className={star <= (hoverRating || rating) ? 'fill-secondary' : 'opacity-30'} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="review-text" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                  Your Review
                </label>
                <textarea
                  id="review-text"
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  aria-invalid={!!errors.text}
                  aria-describedby={errors.text ? 'review-text-error' : undefined}
                  className="w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                  placeholder="Tell us what you think..."
                />
                {errors.text && (
                  <p id="review-text-error" className="mt-1 text-xs text-red-500">
                    {errors.text}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews List */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {allReviews.map((r) => (
              <motion.div key={r.id} variants={fadeUp}>
                <ReviewCard review={r} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
