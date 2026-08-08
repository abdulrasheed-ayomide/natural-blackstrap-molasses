import { motion } from 'framer-motion';
import { FiDroplet } from 'react-icons/fi';
import SEO from '../../components/SEO/SEO.jsx';
import { howToUseIdeas, servingSuggestion } from '../../data/testimonials.js';
import { staggerContainer, fadeUp, revealViewport } from '../../hooks/useScrollReveal.js';

export default function HowToUse() {
  return (
    <>
      <SEO
        title="How To Use"
        description="Simple, practical ways to add blackstrap molasses to your daily routine — from warm water to baking."
        path="/how-to-use"
      />

      <section className="bg-accent/40 py-12 text-center xs:py-16 dark:bg-white/5">
        <div className="container-page">
          <span className="section-eyebrow">Everyday Ideas</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-bark dark:text-cream xs:text-5xl">How To Use</h1>
          <p className="mx-auto mt-3 max-w-xl text-bark/65 dark:text-cream/65">
            One jar, many ways to enjoy it. Here are our favourite everyday uses.
          </p>
        </div>
      </section>

      <section className="container-page py-14 xs:py-16">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3"
        >
          {howToUseIdeas.map((idea, i) => (
            <motion.div
              key={idea.id}
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-card dark:bg-white/5"
            >
              <span className="font-label text-xs font-semibold uppercase tracking-widest text-secondary">
                Idea {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mt-3 grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary dark:bg-white/10">
                <FiDroplet size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-bark dark:text-cream">{idea.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70 dark:text-cream/70">{idea.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 max-w-md rounded-2xl bg-primary px-6 py-6 text-center text-cream">
          <p className="font-label text-xs uppercase tracking-widest text-secondary">Serving Suggestion</p>
          <p className="mt-2 font-display text-lg font-semibold">{servingSuggestion}</p>
        </div>
      </section>
    </>
  );
}
