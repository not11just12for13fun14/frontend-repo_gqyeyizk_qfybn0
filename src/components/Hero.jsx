import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-end pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Premium Real Estate Development & Construction in Mexico
          </h1>
          <p className="mt-4 text-neutral-300 text-lg">We create iconic residences and commercial spaces with uncompromising craftsmanship, sustainability, and timeless design.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-500 text-neutral-900 font-medium hover:bg-yellow-400 transition">
              <Calendar size={18}/> Schedule a Visit
            </Link>
            <a href="#developments" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-700 text-white hover:border-yellow-400 hover:text-yellow-300 transition">
              <Download size={18}/> Request Information
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
