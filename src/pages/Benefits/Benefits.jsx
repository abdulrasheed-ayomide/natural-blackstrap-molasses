import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO.jsx';
import BenefitCard from '../../components/BenefitCard/BenefitCard.jsx';
import { benefits, disclaimer } from '../../data/benefits.js';
import { staggerContainer, revealViewport } from '../../hooks/useScrollReveal.js';

export default function Benefits() {
  return (
    <>
      <SEO
        title="Health Benefits"
        description="Discover the natural minerals found in blackstrap molasses — iron, calcium, magnesium, potassium and more."
        path="/benefits"
      />

      <section className="bg-accent/40 py-12 text-center xs:py-16 dark:bg-white/5">
        <div className="container-page">
          <span className="section-eyebrow">Nature's Minerals</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-bark dark:text-cream xs:text-5xl">Health Benefits</h1>
          <p className="mx-auto mt-3 max-w-xl text-bark/65 dark:text-cream/65">
            Blackstrap molasses keeps the natural minerals of sugarcane that refined sugar leaves behind.
          </p>
        </div>
      </section>

      <section className="container-page py-14 xs:py-16">
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((b) => (
            <BenefitCard key={b.id} benefit={b} />
          ))}
        </motion.div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-accent/50 px-6 py-5 text-center text-sm text-bark/70 dark:bg-white/5 dark:text-cream/70">
          <p className="font-label font-semibold text-primary dark:text-secondary mb-1">A note on these benefits</p>
          {disclaimer}
        </div>
      </section>
    </>
  );
}
