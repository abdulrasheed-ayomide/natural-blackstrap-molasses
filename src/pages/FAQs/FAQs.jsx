import SEO from '../../components/SEO/SEO.jsx';
import FAQComponent from '../../components/FAQ/FAQ.jsx';
import { faqs } from '../../data/faqs.js';
import { getWhatsAppContactUrl } from '../../utils/whatsapp.js';
import { FaWhatsapp } from 'react-icons/fa';

export default function FAQs() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about our natural blackstrap molasses, storage, delivery and more."
        path="/faqs"
      />

      <section className="bg-accent/40 py-12 text-center xs:py-16 dark:bg-white/5">
        <div className="container-page">
          <span className="section-eyebrow">Good to Know</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-bark dark:text-cream xs:text-5xl">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="container-page py-14 xs:py-16">
        <div className="mx-auto max-w-2xl">
          <FAQComponent items={faqs} />

          <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl bg-accent/50 p-6 text-center dark:bg-white/5">
            <p className="text-sm text-bark/70 dark:text-cream/70">Still have a question?</p>
            <a
              href={getWhatsAppContactUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <FaWhatsapp size={18} />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
