import { useEffect, useMemo, useState } from 'react';
import { apiGet } from '../lib/api';
import { Link } from 'react-router-dom';

export default function Properties() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({ location: '', type: '', status: '', price_min: '', price_max: '' });

  useEffect(() => {
    apiGet('/api/properties', filters).then(setItems).catch(()=>setItems([]));
  }, [JSON.stringify(filters)]);

  const onChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold">Properties</h1>
      <div className="mt-6 grid md:grid-cols-5 gap-3">
        <input name="location" placeholder="Location" className="px-4 py-3 rounded bg-neutral-900 border border-neutral-800 outline-none" onChange={onChange}/>
        <select name="type" className="px-4 py-3 rounded bg-neutral-900 border border-neutral-800 outline-none" onChange={onChange}>
          <option value="">Type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="land">Land</option>
          <option value="mixed">Mixed</option>
        </select>
        <select name="status" className="px-4 py-3 rounded bg-neutral-900 border border-neutral-800 outline-none" onChange={onChange}>
          <option value="">Status</option>
          <option value="pre-sale">Pre-Sale</option>
          <option value="available">Available</option>
          <option value="sold">Sold</option>
        </select>
        <input name="price_min" placeholder="Min Price" className="px-4 py-3 rounded bg-neutral-900 border border-neutral-800 outline-none" onChange={onChange}/>
        <input name="price_max" placeholder="Max Price" className="px-4 py-3 rounded bg-neutral-900 border border-neutral-800 outline-none" onChange={onChange}/>
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
              <div className="mt-2 text-sm text-neutral-400">{p.location}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <a href="#" onClick={(e)=>{e.preventDefault(); alert('Exported to CRM (demo).')}} className="text-yellow-400 hover:text-yellow-300">Export to CRM</a>
      </div>
    </div>
  );
}
