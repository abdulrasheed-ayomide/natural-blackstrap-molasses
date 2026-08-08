import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ to, suffix = '', label, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let frame;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-bold text-bark xs:text-4xl dark:text-secondary">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 font-label text-xs uppercase tracking-wider text-bark/60 dark:text-cream/60">{label}</p>
    </div>
  );
}
