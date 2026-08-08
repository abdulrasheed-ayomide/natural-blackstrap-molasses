import { Link } from 'react-router-dom';

export default function EmptyState({ icon, title, message, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white/60 px-6 py-16 text-center dark:bg-white/5">
      {icon && <div className="mb-4 text-5xl text-secondary" aria-hidden="true">{icon}</div>}
      <h2 className="font-display text-xl font-semibold text-bark dark:text-cream">{title}</h2>
      {message && <p className="mt-2 max-w-sm text-sm text-bark/60 dark:text-cream/60">{message}</p>}
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn-primary mt-6">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
