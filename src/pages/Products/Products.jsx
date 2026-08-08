import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { ProductGridSkeleton } from '../../components/Skeleton/Skeleton.jsx';
import EmptyState from '../../components/EmptyState/EmptyState.jsx';
import { products, categories } from '../../data/products.js';
import { staggerContainer, fadeUp, revealViewport } from '../../hooks/useScrollReveal.js';
import { FiSearch } from 'react-icons/fi';

export default function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || p.weight.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <SEO
        title="Shop All Products"
        description="Browse our full range of 100% natural blackstrap molasses — classic jars, bulk sizes and gift sets, delivered nationwide."
        path="/products"
      />

      <section className="bg-accent/40 py-12 text-center xs:py-16 dark:bg-white/5">
        <div className="container-page">
          <span className="section-eyebrow">The Collection</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-bark dark:text-cream xs:text-5xl">Our Products</h1>
          <p className="mx-auto mt-3 max-w-lg text-bark/65 dark:text-cream/65">
            Every size, same promise: 100% natural, unsulphured blackstrap molasses.
          </p>
        </div>
      </section>

      <section className="container-page py-10 xs:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="sm:max-w-xs sm:flex-1">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <CategoryFilter categories={categories} active={category} onChange={setCategory} />
        </div>

        <div className="mt-10">
          {loading ? (
            <ProductGridSkeleton count={6} />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={<FiSearch />}
              title="No products found"
              message="Try a different search term or category."
            />
          ) : (
            <motion.div
              variants={staggerContainer()}
              initial="hidden"
              animate="show"
              viewport={revealViewport}
              className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((p) => (
                <motion.div key={p.id} variants={fadeUp}>
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
