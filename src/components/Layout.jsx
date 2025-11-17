import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, Phone, Calendar, MapPin, Building2 } from 'lucide-react';
import { waLink } from '../lib/api';

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/60 backdrop-blur bg-neutral-950/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-200" />
            <div className="font-semibold tracking-widest uppercase text-sm">Aureum</div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/properties" className={({isActive}) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Properties</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Construction</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Contact</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <a href={waLink('Hello, I would like information about your developments.')} target="_blank" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500 text-neutral-900 font-medium hover:bg-yellow-400 transition">
              <Phone size={16} /> WhatsApp
            </a>
            <button className="md:hidden p-2 rounded border border-neutral-800"><Menu size={18} /></button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-800/60 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-neutral-400">
          <div>
            <div className="font-semibold text-neutral-200 mb-3">Aureum Developments</div>
            <p>Premium real estate development & construction projects in Mexico.</p>
          </div>
          <div>
            <div className="font-semibold text-neutral-200 mb-3">Offices</div>
            <p className="flex items-center gap-2"><MapPin size={14}/> Mexico City</p>
            <p className="flex items-center gap-2"><MapPin size={14}/> Guadalajara</p>
            <p className="flex items-center gap-2"><MapPin size={14}/> Riviera Maya</p>
          </div>
          <div>
            <div className="font-semibold text-neutral-200 mb-3">Services</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Building2 size={14}/> Residential</li>
              <li className="flex items-center gap-2"><Building2 size={14}/> Commercial</li>
              <li className="flex items-center gap-2"><Building2 size={14}/> Remodeling</li>
              <li className="flex items-center gap-2"><Building2 size={14}/> Project Management</li>
            </ul>
          </div>
          <div className="text-neutral-500">© {new Date().getFullYear()} Aureum. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
