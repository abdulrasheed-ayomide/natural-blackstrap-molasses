import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import JarIllustration from '../JarIllustration.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { useCart } from '../../context/CartContext/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card dark:bg-white/5"
    >
      <Link to={`/products/${product.id}`} className="relative block bg-accent/50 dark:bg-white/5" aria-label={`View ${product.name} ${product.weight}`}>
        {product.tags?.[0] && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary/95 px-3 py-1 text-[11px] font-semibold text-cream">
            {product.tags[0]}
          </span>
        )}
        <div className="flex h-56 items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
          <JarIllustration variant={product.visual} className="h-full w-auto drop-shadow-md" label={product.name} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1 text-secondary" aria-label={`Rated ${product.rating} out of 5`}>
          <FiStar className="fill-secondary" size={14} />
          <span className="text-xs font-medium text-bark/70 dark:text-cream/70">{product.rating}</span>
        </div>

        <Link to={`/products/${product.id}`} className="mt-1.5">
          <h3 className="font-display text-lg font-semibold text-bark hover:text-primary dark:text-cream">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-bark/60 dark:text-cream/60">{product.weight}</p>

        <p className="mt-2 line-clamp-2 text-sm text-bark/70 dark:text-cream/70">{product.description}</p>

        <div className="mt-4 flex items-center justify-between gap-3 pt-2">
          <span className="font-display text-lg font-bold text-primary dark:text-secondary">
            {formatCurrency(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="btn-primary !py-2 !px-4 text-xs"
            aria-label={`Add ${product.name} ${product.weight} to cart`}
          >
            <FiShoppingCart size={15} />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
