import { motion } from 'framer-motion';
import { FiHeart, FiFeather, FiUsers } from 'react-icons/fi';
import SEO from '../../components/SEO/SEO.jsx';
import DripDivider from '../../components/DripDivider.jsx';
import JarIllustration from '../../components/JarIllustration.jsx';
import { fadeUp, staggerContainer, revealViewport } from '../../hooks/useScrollReveal.js';

const values = [
  { icon: FiFeather, title: 'Simplicity', text: 'One ingredient, one process, nothing hidden. We believe the best food label is the shortest one.' },
  { icon: FiHeart, title: 'Care', text: 'Every batch is simmered and bottled with the same attention we would give our own family.' },
  { icon: FiUsers, title: 'Community', text: 'We work with local sugarcane growers and support fair, transparent sourcing.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn the story behind Natural Blackstrap Molasses — a family business built on unrefined, unsulphured molasses made the traditional way."
        path="/about"
      />

      <section className="bg-accent/40 py-14 xs:py-20 dark:bg-white/5">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
            <span className="section-eyebrow">Our Story</span>
            <h1 className="mt-2 font-display text-4xl font-bold text-bark dark:text-cream xs:text-5xl">A Family Recipe, Bottled Honestly</h1>
            <p className="mt-5 text-base leading-relaxed text-bark/70 dark:text-cream/70 xs:text-lg">
              Natural Blackstrap Molasses began in our family kitchen, simmering sugarcane the traditional way our
              grandmother taught us. What started as jars shared with neighbours has grown into a small business
              built on one promise: pure, unsulphured molasses with nothing added and nothing taken away.
            </p>
            <p className="mt-4 text-base leading-relaxed text-bark/70 dark:text-cream/70">
              Today, every jar is still slow-simmered in small batches, checked by hand, and bottled close to home —
              because we believe good food shouldn't need a long ingredient list to be trusted.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto flex h-64 w-64 items-center justify-center xs:h-72 xs:w-72"
          >
            <div className="absolute inset-0 rounded-blob bg-secondary/20 animate-float" />
            <JarIllustration variant="jar" className="relative h-4/5 w-4/5" label="Natural blackstrap molasses jar" />
          </motion.div>
        </div>
      </section>

      <DripDivider />

      <section className="container-page py-16 xs:py-20">
        <div className="text-center">
          <span className="section-eyebrow">What We Stand For</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-bark dark:text-cream xs:text-4xl">Our Values</h2>
        </div>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="rounded-3xl bg-white p-7 text-center shadow-card dark:bg-white/5">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary dark:bg-white/10">
                <v.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-bark dark:text-cream">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/65 dark:text-cream/65">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-primary py-16 text-center text-cream xs:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold xs:text-3xl">Made with the same care as our own kitchen</h2>
          <p className="mx-auto mt-3 max-w-lg text-cream/75">
            From our family to your table — thank you for trusting us with something you feed the people you love.
          </p>
        </div>
      </section>
    </>
  );
}
