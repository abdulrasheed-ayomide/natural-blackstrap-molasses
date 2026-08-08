import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import JarIllustration from '../JarIllustration.jsx';
import QuantitySelector from '../QuantitySelector/QuantitySelector.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { useCart } from '../../context/CartContext/CartContext.jsx';

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, setQty, removeItem } = useCart();

  return (
    <li className="flex flex-col gap-4 border-b border-accent/60 py-5 xs:flex-row xs:items-center dark:border-white/10">
      <Link to={`/products/${item.id}`} className="mx-auto h-20 w-20 shrink-0 rounded-2xl bg-accent/50 p-2 xs:mx-0 dark:bg-white/5">
        <JarIllustration variant={item.visual} className="h-full w-full" label={item.name} />
      </Link>

      <div className="min-w-0 flex-1 text-center xs:text-left">
        <Link to={`/products/${item.id}`} className="font-display font-semibold text-bark hover:text-primary dark:text-cream">
          {item.name}
        </Link>
        <p className="text-sm text-bark/60 dark:text-cream/60">{item.weight}</p>
        <p className="mt-1 font-semibold text-primary dark:text-secondary sm:hidden">{formatCurrency(item.price)}</p>
      </div>

      <div className="flex items-center justify-center gap-4 xs:justify-end">
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => increaseQty(item.id)}
          onDecrease={() => decreaseQty(item.id)}
          onChange={(qty) => setQty(item.id, qty)}
          size="sm"
        />
        <span className="hidden w-24 text-right font-semibold text-bark dark:text-cream sm:inline">
          {formatCurrency(item.price * item.quantity)}
        </span>
        <button
          type="button"
          onClick={() => removeItem(item.id, item.name)}
          aria-label={`Remove ${item.name} from cart`}
          className="grid h-9 w-9 place-items-center rounded-full text-bark/50 transition-colors hover:bg-red-50 hover:text-red-500 dark:text-cream/50"
        >
          <FiTrash2 size={17} />
        </button>
      </div>
    </li>
  );
}
