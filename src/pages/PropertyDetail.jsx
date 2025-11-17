import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet, apiPost, waLink } from '../lib/api';

export default function PropertyDetail() {
  const { slug } = useParams();
  const [p, setP] = useState(null);

  useEffect(() => {
    apiGet(`/api/properties/${slug}`).then(setP).catch(()=>setP(null));
  }, [slug]);

  if (!p) return <div className="max-w-7xl mx-auto px-6 py-10">Loading...</div>;

  return (
    <div>
      <div className="h-[50vh] bg-neutral-900">
        {p.hero_image && <img src={p.hero_image} alt={p.title} className="w-full h-full object-cover"/>}
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-semibold">{p.title}</h1>
          <div className="text-yellow-400 mt-1">{p.currency} {Number(p.price).toLocaleString()}</div>
          <p className="mt-4 text-neutral-300 whitespace-pre-line">{p.description}</p>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {p.gallery?.map((img, i) => (
              <img key={i} src={img} className="w-full aspect-[4/3] object-cover rounded"/>
            ))}
          </div>

          {p.video_url && (
            <div className="mt-6 aspect-video">
              <iframe title="Video" src={p.video_url} className="w-full h-full rounded" allowFullScreen></iframe>
            </div>
          )}

          {p.tour_360_url && (
            <div className="mt-6 aspect-video">
              <iframe title="Virtual Tour" src={p.tour_360_url} className="w-full h-full rounded" allowFullScreen></iframe>
            </div>
          )}

          {p.floorplan_url && (
            <div className="mt-6">
              <a href={p.floorplan_url} target="_blank" className="text-yellow-400 hover:text-yellow-300">Download Floor Plans</a>
            </div>
          )}

          {p.latitude && p.longitude && (
            <div className="mt-8">
              <iframe
                title="Map"
                width="100%"
                height="320"
                loading="lazy"
                className="rounded"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${p.latitude},${p.longitude}&hl=es;z=14&output=embed`}
              />
            </div>
          )}
        </div>
        <aside>
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 sticky top-24">
            <div className="font-medium">Request a brochure</div>
            <form onSubmit={async (e)=>{e.preventDefault(); const form = new FormData(e.currentTarget); await apiPost('/api/leads',{ name: form.get('name'), email: form.get('email'), phone: form.get('phone'), message: form.get('message'), property_id: p._id, tags: ['brochure', p.slug]}); alert('Thanks! Brochure sent to your email (demo).')}} className="mt-3 space-y-3">
              <input name="name" required placeholder="Full name" className="w-full px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
              <input name="email" required type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
              <input name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
              <textarea name="message" placeholder="I would like the brochure and availability." rows={3} className="w-full px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
              <button className="w-full px-5 py-3 rounded-full bg-yellow-500 text-neutral-900 font-medium hover:bg-yellow-400 transition">Send Brochure</button>
            </form>
            <a href={waLink(`Hi, I'm interested in ${p.title} (${p.location}).`)} target="_blank" className="block text-center mt-3 text-yellow-400 hover:text-yellow-300">Chat on WhatsApp</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); alert('Schedule form (demo)')}} className="block text-center mt-2 text-neutral-300 hover:text-white">Schedule a visit</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
