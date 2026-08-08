import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchBar({ value, onChange, placeholder = 'Search products…' }) {
  return (
    <div className="relative w-full">
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-bark/40" aria-hidden="true" />
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <input
        id="product-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-primary/15 bg-white py-3 pl-11 pr-10 text-sm text-bark outline-none transition-colors focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-7 w-7 place-items-center rounded-full text-bark/50 dark:text-cream/60 hover:bg-accent/60"
        >
          <FiX size={15} />
        </button>
      )}
    </div>
  );
}
