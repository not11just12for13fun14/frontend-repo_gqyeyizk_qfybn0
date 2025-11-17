import { motion } from 'framer-motion';
import { Home, Shield, Leaf, Sparkles, MapPin, BedDouble, Bath, Car, ImagePlus, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, text }) => (
  <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
    <Icon className="text-yellow-400" />
    <div className="mt-3 font-semibold text-neutral-100">{title}</div>
    <p className="text-neutral-400 text-sm mt-1">{text}</p>
  </div>
);

export function Benefits() {
  const items = [
    { icon: Shield, title: 'Structural Excellence', text: 'German-level engineering, earthquake-ready, long-term durability.' },
    { icon: Leaf, title: 'Sustainable by Design', text: 'LEED-inspired standards with energy efficiency and water-saving systems.' },
    { icon: Sparkles, title: 'Luxury Finishes', text: 'Italian marble, oak carpentry, integrated smart-home technology.' },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Why Aureum</h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((x, i) => <FeatureCard key={i} {...x} />)}
      </div>
    </section>
  );
}

export function FeaturedDevelopments({ items = [] }) {
  return (
    <section id="developments" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured Developments</h2>
        <Link to="/properties" className="text-yellow-400 hover:text-yellow-300 text-sm">View all</Link>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <Link key={p._id} to={`/properties/${p.slug || p._id}`} className="group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40">
            <div className="aspect-[16/10] bg-neutral-800 overflow-hidden">
              {p.hero_image ? (
                <img src={p.hero_image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              ) : (
                <div className="w-full h-full grid place-items-center text-neutral-600">Image</div>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{p.title}</div>
                <div className="text-yellow-400">{p.currency} {Number(p.price).toLocaleString()}</div>
              </div>
              <div className="mt-2 text-sm text-neutral-400 flex items-center gap-3">
                <span className="flex items-center gap-1"><MapPin size={14}/> {p.location}</span>
                {p.bedrooms != null && <span className="flex items-center gap-1"><BedDouble size={14}/> {p.bedrooms}</span>}
                {p.bathrooms != null && <span className="flex items-center gap-1"><Bath size={14}/> {p.bathrooms}</span>}
                {p.parking != null && <span className="flex items-center gap-1"><Car size={14}/> {p.parking}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { name: 'María López', text: 'The attention to detail and the experience from first visit to handing over the keys was exceptional.' },
    { name: 'Carlos Martínez', text: 'Aureum’s team delivered our boutique hotel ahead of schedule with impeccable craftsmanship.' },
    { name: 'Ana & Diego', text: 'We love our new apartment in Polanco—luxury finishes and outstanding amenities.' },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Testimonials</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((x, i) => (
          <div key={i} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <div className="text-neutral-300">“{x.text}”</div>
            <div className="mt-4 text-sm text-neutral-500">— {x.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Request Information</h2>
          <p className="mt-2 text-neutral-400">Our advisors will contact you to share availability, pricing, and brochures.</p>
        </div>
        <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! Our advisor will contact you shortly.')}} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
            <input placeholder="Phone" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none sm:col-span-2"/>
            <textarea placeholder="Tell us about your goals" rows={4} className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none sm:col-span-2"/>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-500 text-neutral-900 font-medium hover:bg-yellow-400 transition">
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
