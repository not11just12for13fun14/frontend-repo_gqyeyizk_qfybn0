import { waLink } from '../lib/api';

export default function Contact(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We will get back to you shortly.')}} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60">
          <div className="grid sm:grid-cols-2 gap-3">
            <input required placeholder="Full name" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
            <input placeholder="Phone" className="sm:col-span-2 px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
            <textarea placeholder="How can we help?" rows={4} className="sm:col-span-2 px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
          </div>
          <button className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-500 text-neutral-900 font-medium hover:bg-yellow-400 transition">Send</button>
          <a href={waLink('Hello, I would like to speak to an advisor.')} target="_blank" className="block mt-3 text-yellow-400 hover:text-yellow-300">Chat on WhatsApp</a>
        </form>
        <div>
          <div className="text-neutral-300">Business Hours</div>
          <div className="text-neutral-400">Mon-Fri 9:00 – 19:00</div>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {[{city:'Mexico City', lat:19.4326, lng:-99.1332},{city:'Guadalajara', lat:20.6597, lng:-103.3496}].map((o,i)=> (
              <div key={i}>
                <div className="font-medium">{o.city}</div>
                <iframe title={o.city} width="100%" height="180" loading="lazy" className="rounded" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${o.lat},${o.lng}&hl=es;z=12&output=embed`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
