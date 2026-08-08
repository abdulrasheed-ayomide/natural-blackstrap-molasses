import { useState } from 'react';
import { FiShoppingBag, FiTrash2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SEO from '../../components/SEO/SEO.jsx';
import CartItem from '../../components/CartItem/CartItem.jsx';
import EmptyState from '../../components/EmptyState/EmptyState.jsx';
import { useCart } from '../../context/CartContext/CartContext.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { getWhatsAppOrderUrl } from '../../utils/whatsapp.js';

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCart();
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '', note: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setCustomer((c) => ({ ...c, [e.target.name]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!customer.name.trim()) errs.name = 'Please enter your full name.';
    if (!customer.phone.trim()) errs.phone = 'Please enter your phone number.';
    if (!customer.address.trim()) errs.address = 'Please enter your delivery address.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error('Your cart is empty.');
      return;
    }
    if (!validate()) return;

    const url = getWhatsAppOrderUrl({ cart, totalPrice, customer });
    window.open(url, '_blank', 'noreferrer');
  };

  if (cart.length === 0) {
    return (
      <>
        <SEO title="Your Cart" description="Review the items in your cart before checking out via WhatsApp." path="/cart" />
        <section className="container-page py-16 xs:py-24">
          <EmptyState
            icon={<FiShoppingBag />}
            title="Your cart is empty"
            message="Looks like you haven't added any molasses yet — browse our products to get started."
            actionLabel="Shop Products"
            actionTo="/products"
          />
        </section>
      </>
    );
  }

  return (
    <>
      <SEO title="Your Cart" description="Review the items in your cart before checking out via WhatsApp." path="/cart" />

      <section className="container-page py-10 xs:py-14">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-3xl font-bold text-bark xs:text-4xl dark:text-cream">Your Cart</h1>
          <button
            type="button"
            onClick={clearCart}
            className="flex items-center gap-1.5 text-sm font-medium text-bark/50 hover:text-red-500 dark:text-cream/50"
          >
            <FiTrash2 size={15} /> Clear Cart
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ul className="rounded-3xl bg-white p-5 shadow-card xs:p-6 dark:bg-white/5">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="h-fit space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-card dark:bg-white/5">
              <h2 className="font-display text-lg font-semibold text-bark dark:text-cream">Order Summary</h2>
              <div className="mt-4 flex justify-between text-sm text-bark/70 dark:text-cream/70">
                <span>Subtotal</span>
                <span className="font-semibold text-bark dark:text-cream">{formatCurrency(totalPrice)}</span>
              </div>
              <p className="mt-1 text-xs text-bark/50 dark:text-cream/50">
                Delivery fee confirmed by our team via WhatsApp based on your location.
              </p>
              <div className="mt-4 flex justify-between border-t border-accent/60 pt-4 font-display text-lg font-bold text-primary dark:border-white/10 dark:text-secondary">
                <span>Total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
            </div>

            <form onSubmit={handleCheckout} noValidate className="rounded-3xl bg-white p-6 shadow-card dark:bg-white/5">
              <h2 className="font-display text-lg font-semibold text-bark dark:text-cream">Delivery Details</h2>
              <div className="mt-5 space-y-4">
                <div>
                  <label htmlFor="cust-name" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                    Full Name
                  </label>
                  <input
                    id="cust-name"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="cust-phone" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                    Phone Number
                  </label>
                  <input
                    id="cust-phone"
                    name="phone"
                    type="tel"
                    value={customer.phone}
                    onChange={handleChange}
                    aria-invalid={!!errors.phone}
                    className="w-full rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="cust-address" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                    Delivery Address
                  </label>
                  <textarea
                    id="cust-address"
                    name="address"
                    rows={3}
                    value={customer.address}
                    onChange={handleChange}
                    aria-invalid={!!errors.address}
                    className="w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                  />
                  {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                </div>

                <div>
                  <label htmlFor="cust-note" className="mb-1.5 block text-sm font-label font-medium text-bark dark:text-cream">
                    Additional Note <span className="text-bark/40 dark:text-cream/60">(optional)</span>
                  </label>
                  <textarea
                    id="cust-note"
                    name="note"
                    rows={2}
                    value={customer.note}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm text-bark outline-none focus:border-primary dark:bg-white/5 dark:text-cream dark:border-white/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
              >
                <FaWhatsapp size={18} />
                Checkout via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
