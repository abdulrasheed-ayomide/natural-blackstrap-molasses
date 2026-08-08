import { FiStar } from 'react-icons/fi';

export default function ReviewCard({ review }) {
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card dark:bg-white/5">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary font-label text-sm font-bold text-cream">
          {initials}
        </div>
        <div>
          <p className="font-display font-semibold text-bark dark:text-cream">{review.name}</p>
          <div className="flex gap-0.5 text-secondary" aria-label={`Rated ${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar key={i} size={13} className={i < review.rating ? 'fill-secondary' : 'opacity-30'} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-bark/75 dark:text-cream/75">&ldquo;{review.text}&rdquo;</p>
    </article>
  );
}
