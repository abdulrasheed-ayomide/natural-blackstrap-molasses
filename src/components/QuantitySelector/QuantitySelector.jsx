import { FiMinus, FiPlus } from 'react-icons/fi';

export default function QuantitySelector({ quantity, onIncrease, onDecrease, onChange, min = 1, size = 'md' }) {
  const sizeClasses = size === 'sm' ? 'h-8 w-8 text-sm' : 'h-10 w-10 text-base';

  return (
    <div className="inline-flex items-center rounded-full border border-primary/20 bg-white dark:bg-white/5" role="group" aria-label="Quantity selector">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className={`grid ${sizeClasses} place-items-center rounded-full text-primary transition-colors hover:bg-accent/60 disabled:opacity-30 disabled:pointer-events-none`}
      >
        <FiMinus />
      </button>
      <label className="sr-only" htmlFor="qty-input">
        Quantity
      </label>
      <input
        id="qty-input"
        type="number"
        inputMode="numeric"
        min={min}
        value={quantity}
        onChange={(e) => onChange?.(Math.max(min, Number(e.target.value) || min))}
        className="w-10 border-0 bg-transparent text-center text-sm font-semibold text-bark outline-none dark:text-cream [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`grid ${sizeClasses} place-items-center rounded-full text-primary transition-colors hover:bg-accent/60`}
      >
        <FiPlus />
      </button>
    </div>
  );
}
