export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className={`rounded-full px-4 py-2 text-sm font-label font-medium transition-colors ${
            active === cat
              ? 'bg-primary text-cream'
              : 'bg-white text-bark/70 hover:bg-accent/60 dark:bg-white/5 dark:text-cream/70'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
