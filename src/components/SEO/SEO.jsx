import { useEffect } from 'react';

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Lightweight SEO manager — sets document title and meta tags per page
 * without pulling in an extra dependency.
 */
export default function SEO({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Natural Blackstrap Molasses` : 'Natural Blackstrap Molasses';
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `https://naturalblackstrapmolasses.com${path}`, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://naturalblackstrapmolasses.com${path}`);
  }, [title, description, path]);

  return null;
}
