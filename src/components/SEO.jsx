import { useEffect } from 'react';
import { apiGet } from '../lib/api';

export default function SEO({ kind = 'page', slug = 'home', fallback = {} }) {
  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const data = await apiGet(`/api/seo/${kind}/${slug}`);
        if (!active) return;
        applySEO(data);
      } catch (e) {
        applySEO(fallback);
      }
    }
    function applySEO({ title, description, keywords, schema_type } = {}) {
      if (title) document.title = title;
      if (description) setMeta('description', description);
      if (Array.isArray(keywords)) setMeta('keywords', keywords.join(', '));
      // Basic JSON-LD
      const ld = {
        '@context': 'https://schema.org',
        '@type': schema_type || 'RealEstateAgent',
        name: title || fallback.title || 'Aureum Developments',
        description: description || fallback.description || 'Luxury Real Estate & Construction in Mexico',
      };
      setJsonLd(ld);
    }
    function setMeta(name, content) {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content || '');
    }
    function setJsonLd(obj) {
      let el = document.getElementById('json-ld-primary');
      if (!el) {
        el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = 'json-ld-primary';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(obj);
    }
    load();
    return () => { active = false; };
  }, [kind, slug]);
  return null;
}
