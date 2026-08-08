import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import SEO from '../../components/SEO/SEO.jsx';
import JarIllustration from '../../components/JarIllustration.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="container-page flex flex-col items-center justify-center py-20 text-center xs:py-28">
        <div className="relative flex h-48 w-48 items-center justify-center xs:h-56 xs:w-56">
          <div className="absolute inset-0 rounded-blob bg-accent animate-float" />
          <JarIllustration variant="jar" className="relative h-4/5 w-4/5 opacity-80" label="Empty jar" />
        </div>
        <h1 className="mt-8 font-display text-5xl font-bold text-primary xs:text-6xl">404</h1>
        <h2 className="mt-2 font-display text-2xl font-semibold text-bark dark:text-cream">This jar is empty</h2>
        <p className="mx-auto mt-3 max-w-sm text-bark/65 dark:text-cream/65">
          We couldn't find the page you were looking for. It may have been moved or no longer exists.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <FiArrowLeft />
          Back to Home
        </Link>
      </section>
    </>
  );
}
