import * as FaIcons from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeUp } from '../../hooks/useScrollReveal.js';

export default function BenefitCard({ benefit }) {
  const Icon = FaIcons[benefit.icon] || FaIcons.FaLeaf;

  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-3xl bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 dark:bg-white/5"
    >
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-cream dark:bg-white/10">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 font-display font-semibold text-bark dark:text-cream">{benefit.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-bark/70 dark:text-cream/70">{benefit.text}</p>
    </motion.div>
  );
}
