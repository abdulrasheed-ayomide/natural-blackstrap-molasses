import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FiShoppingCart, FiCheck, FiStar, FiPackage } from 'react-icons/fi';
import SEO from '../../components/SEO/SEO.jsx';
import ProductGallery from '../../components/ProductGallery/ProductGallery.jsx';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { getProductById, getRelatedProducts, nutritionFacts } from '../../data/products.js';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { useCart } from '../../context/CartContext/CartContext.jsx';

const tabs = ['Description', 'Nutrition Facts', 'Suggested Uses', 'Storage'];

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  if (!product) return <Navigate to="/404" replace />;

  const related = getRelatedProducts(product);

  return (
    <>
      <SEO
        title={`${product.name} — ${product.weight}`}
        description={product.description}
        path={`/products/${product.id}`}
      />

      <section className="container-page py-10 xs:py-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-bark/50 dark:text-cream/50">
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-bark dark:text-cream">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery product={product} />

          <div>
            {product.tags?.[0] && (
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary dark:bg-white/10 dark:text-secondary">
                {product.tags[0]}
              </span>
            )}
            <h1 className="mt-3 font-display text-3xl font-bold text-bark xs:text-4xl dark:text-cream">
              {product.name}
            </h1>
            <p className="mt-1 text-bark/60 dark:text-cream/60">{product.weight}</p>

            <div className="mt-3 flex items-center gap-1.5 text-secondary" aria-label={`Rated ${product.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} size={16} className={i < Math.round(product.rating) ? 'fill-secondary' : 'opacity-30'} />
              ))}
              <span className="ml-1 text-sm text-bark/60 dark:text-cream/60">({product.rating})</span>
            </div>

            <p className="mt-5 font-display text-3xl font-bold text-primary dark:text-secondary">
              {formatCurrency(product.price)}
            </p>

            <p className="mt-5 leading-relaxed text-bark/70 dark:text-cream/70">{product.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={setQuantity}
              />
              <button type="button" onClick={() => addItem(product, quantity)} className="btn-primary flex-1 xs:flex-none">
                <FiShoppingCart />
                Add to Cart
              </button>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-2 xs:grid-cols-2">
              {['100% Natural', 'Unsulphured', 'No Additives', 'Nationwide Delivery'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-bark/70 dark:text-cream/70">
                  <FiCheck className="text-primary dark:text-secondary" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-accent/50 p-4 text-sm text-bark/70 dark:bg-white/5 dark:text-cream/70">
              <FiPackage className="shrink-0 text-primary dark:text-secondary" size={20} />
              Orders are confirmed and delivered via WhatsApp checkout — no online payment required upfront.
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex flex-wrap gap-2 border-b border-accent/60 dark:border-white/10" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`-mb-px border-b-2 px-4 py-3 text-sm font-label font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-primary text-primary dark:text-secondary dark:border-secondary'
                    : 'border-transparent text-bark/50 hover:text-bark dark:text-cream/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-2xl">
            {activeTab === 'Description' && (
              <p className="leading-relaxed text-bark/70 dark:text-cream/70">{product.description}</p>
            )}
            {activeTab === 'Nutrition Facts' && (
              <div>
                <p className="text-sm text-bark/60 dark:text-cream/60">Serving size: {nutritionFacts.servingSize}</p>
                <dl className="mt-4 divide-y divide-accent/60 dark:divide-white/10">
                  {nutritionFacts.perServing.map((n) => (
                    <div key={n.label} className="flex justify-between py-2.5 text-sm">
                      <dt className="text-bark/70 dark:text-cream/70">{n.label}</dt>
                      <dd className="font-semibold text-bark dark:text-cream">{n.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs text-bark/50 dark:text-cream/50">Ingredients: {nutritionFacts.ingredients}</p>
              </div>
            )}
            {activeTab === 'Suggested Uses' && (
              <p className="leading-relaxed text-bark/70 dark:text-cream/70">
                Stir into warm water or tea, blend into smoothies, drizzle over oatmeal, or use in baking, marinades
                and glazes as a natural alternative to refined sugar. See our{' '}
                <Link to="/how-to-use" className="font-semibold text-primary hover:underline dark:text-secondary">
                  How To Use guide
                </Link>{' '}
                for more ideas.
              </p>
            )}
            {activeTab === 'Storage' && (
              <p className="leading-relaxed text-bark/70 dark:text-cream/70">
                Store tightly sealed in a cool, dry place away from direct sunlight. Refrigeration is optional. Once
                opened, use within 12 months for best flavour and quality.
              </p>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-bark dark:text-cream">You May Also Like</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
