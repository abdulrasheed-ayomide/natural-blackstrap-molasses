import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiTruck, FiShield, FiHeart } from 'react-icons/fi';
import SEO from '../../components/SEO/SEO.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import DripDivider from '../../components/DripDivider.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import BenefitCard from '../../components/BenefitCard/BenefitCard.jsx';
import ReviewCard from '../../components/ReviewCard/ReviewCard.jsx';
import FAQ from '../../components/FAQ/FAQ.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';
import Counter from '../../components/Counter/Counter.jsx';
import { products } from '../../data/products.js';
import { benefits, disclaimer } from '../../data/benefits.js';
import { testimonials } from '../../data/testimonials.js';
import { faqs } from '../../data/faqs.js';
import { fadeUp, staggerContainer, revealViewport } from '../../hooks/useScrollReveal.js';

const whyUs = [
  { icon: FiCheckCircle, title: 'Unrefined & Unsulphured', text: 'No additives, no shortcuts — just pure sugarcane molasses.' },
  { icon: FiShield, title: 'Small-Batch Quality', text: 'Slow-simmered in small batches to protect natural minerals.' },
  { icon: FiTruck, title: 'Delivered Nationwide', text: 'Ordered on WhatsApp, packed with care, delivered to your door.' },
  { icon: FiHeart, title: 'Family-Owned', text: 'A trusted recipe, made with the same care as our own kitchen.' },
];

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <SEO
        title="100% Natural Blackstrap Molasses"
        description="Shop 100% natural, unsulphured blackstrap molasses — rich in iron, calcium, magnesium and potassium. Order online with WhatsApp checkout."
        path="/"
      />
      <Hero />
      <DripDivider />

      {/* Why Choose Us */}
      <section className="container-page py-16 xs:py-20">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-4"
        >
          {whyUs.map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="rounded-3xl bg-white p-6 text-center shadow-card dark:bg-white/5">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary dark:bg-white/10">
                <item.icon size={20} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-bark dark:text-cream">{item.title}</h3>
              <p className="mt-2 text-sm text-bark/65 dark:text-cream/65">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="bg-accent/30 py-16 xs:py-20 dark:bg-white/[0.03]">
        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-4 text-center xs:flex-row xs:text-left">
            <div>
              <span className="section-eyebrow">Shop the Collection</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-bark dark:text-cream xs:text-4xl">Featured Products</h2>
            </div>
            <Link to="/products" className="btn-secondary shrink-0">
              View All <FiArrowRight />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featured.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="container-page py-16 xs:py-20">
        <div className="text-center">
          <span className="section-eyebrow">Nature's Minerals</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-bark dark:text-cream xs:text-4xl">Health Benefits</h2>
          <p className="mx-auto mt-3 max-w-xl text-bark/65 dark:text-cream/65">
            A concentrated, traditional source of everyday minerals — the way sugarcane offers them naturally.
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.slice(0, 4).map((b) => (
            <BenefitCard key={b.id} benefit={b} />
          ))}
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-accent/50 px-5 py-4 text-center text-xs text-bark/60 dark:bg-white/5 dark:text-cream/60">
          {disclaimer}
        </p>

        <div className="mt-6 text-center">
          <Link to="/benefits" className="font-label text-sm font-semibold text-primary hover:underline dark:text-secondary">
            See all 12 benefits →
          </Link>
        </div>
      </section>

      <DripDivider flip />

      {/* How It Works / Stats */}
      <section className="bg-primary py-16 text-cream xs:py-20">
        <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
          <Counter to={5000} suffix="+" label="Jars Delivered" />
          <Counter to={4} suffix=".8/5" label="Average Rating" />
          <Counter to={36} suffix=" States" label="Reached in Nigeria" />
          <Counter to={100} suffix="%" label="Natural Ingredients" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-16 xs:py-20">
        <div className="text-center">
          <span className="section-eyebrow">Loved by Families</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-bark xs:text-4xl">What Customers Say</h2>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={fadeUp}>
              <ReviewCard review={t} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQs preview */}
      <section className="bg-accent/30 py-16 xs:py-20 dark:bg-white/[0.03]">
        <div className="container-page">
          <div className="text-center">
            <span className="section-eyebrow">Good to Know</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-bark dark:text-cream xs:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <FAQ items={faqs.slice(0, 4)} />
          </div>
          <div className="mt-6 text-center">
            <Link to="/faqs" className="font-label text-sm font-semibold text-primary hover:underline dark:text-secondary">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page py-16 xs:py-20">
        <div className="rounded-3xl bg-accent/50 p-8 xs:p-12 dark:bg-white/5">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
