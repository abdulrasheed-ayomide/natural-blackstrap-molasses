import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import JarIllustration from '../JarIllustration.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent/40 dark:bg-white/5" aria-label="Introduction">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-page relative grid grid-cols-1 items-center gap-10 py-14 xs:py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <span className="section-eyebrow inline-block">Slow-Simmered &middot; Unsulphured &middot; Unrefined</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-bark dark:text-cream xs:text-5xl lg:text-6xl">
            100% Natural
            <span className="block text-primary">Blackstrap Molasses</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base font-medium leading-relaxed text-bark/80 dark:text-cream/80 lg:mx-0 xs:text-lg">
            Rich in Iron, Calcium, Magnesium, Potassium and other essential minerals — the way nature intended,
            with nothing added and nothing taken away.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 xs:flex-row xs:justify-center lg:justify-start">
            <Link to="/products" className="btn-primary w-full xs:w-auto">
              Shop Now
              <FiArrowRight />
            </Link>
            <Link to="/benefits" className="btn-secondary w-full xs:w-auto">
              Learn More
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            <div>
              <p className="font-display text-2xl font-bold text-primary dark:text-secondary">5,000+</p>
              <p className="text-xs text-bark/60 dark:text-cream/60">Jars Delivered</p>
            </div>
            <div className="h-8 w-px bg-primary/15" />
            <div>
              <p className="font-display text-2xl font-bold text-primary dark:text-secondary">4.8/5</p>
              <p className="text-xs text-bark/60 dark:text-cream/60">Customer Rating</p>
            </div>
            <div className="h-8 w-px bg-primary/15" />
            <div>
              <p className="font-display text-2xl font-bold text-primary dark:text-secondary">100%</p>
              <p className="text-xs text-bark/60 dark:text-cream/60">Natural</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center xs:h-80 xs:w-80 lg:h-[26rem] lg:w-[26rem]"
        >
          <div className="absolute inset-0 rounded-blob bg-secondary/25 animate-float" />
          <div className="absolute inset-6 rounded-blob bg-primary/10" />
          <JarIllustration variant="jar" className="relative h-4/5 w-4/5 drop-shadow-2xl" label="Natural blackstrap molasses jar" />
        </motion.div>
      </div>
    </section>
  );
}
