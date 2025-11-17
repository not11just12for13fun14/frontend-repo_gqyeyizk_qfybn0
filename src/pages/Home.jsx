import Hero from '../components/Hero';
import { Benefits, FeaturedDevelopments, Testimonials, ContactForm } from '../components/HomeSections';
import { useEffect, useState } from 'react';
import { apiGet } from '../lib/api';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    apiGet('/api/properties', { featured: true, limit: 6 }).then(setFeatured).catch(()=>setFeatured([]));
  }, []);
  return (
    <div>
      <Hero />
      <FeaturedDevelopments items={featured} />
      <Benefits />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
