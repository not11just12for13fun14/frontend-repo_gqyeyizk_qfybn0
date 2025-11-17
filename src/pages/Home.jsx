import Hero from '../components/Hero';
import { Benefits, FeaturedDevelopments, Testimonials, ContactForm } from '../components/HomeSections';
import { useEffect, useState } from 'react';
import { apiGet } from '../lib/api';
import SEO from '../components/SEO';
import DevelopmentsMap from '../components/Map';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    apiGet('/api/properties', { featured: true, limit: 6 }).then(setFeatured).catch(()=>setFeatured([]));
  }, []);
  return (
    <div>
      <SEO kind="page" slug="home" fallback={{ title: 'Aureum Developments | Luxury Real Estate & Construction in Mexico', description: 'Premium developments, high-end construction, and bespoke services across Mexico.' }} />
      <Hero />
      <FeaturedDevelopments items={featured} />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mt-10 mb-4">Developments Map</h2>
        <DevelopmentsMap />
      </div>
      <Benefits />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
