export default function Services(){
  const services = [
    { title:'Residential Construction', text:'Custom homes and high-rise residences delivered with precision and luxury.'},
    { title:'Commercial Development', text:'Boutique hotels, retail, and office spaces that elevate brand presence.'},
    { title:'Remodeling & Interiors', text:'Transformations with bespoke carpentry, stonework, and smart systems.'},
    { title:'Project Management', text:'Integrated planning, permits, budgets, and on-site supervision.'},
  ];
  const gallery = [
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop',
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold">Construction Services</h1>
      <p className="mt-2 text-neutral-400">From concept to completion—residential, commercial, and hospitality projects in Mexico.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map((s,i)=> (
          <div key={i} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <div className="font-medium">{s.title}</div>
            <p className="text-neutral-400 mt-1">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-3">
        {gallery.map((g,i)=>(<img key={i} src={g} className="w-full aspect-[4/3] object-cover rounded"/>))}
      </div>
      <div className="mt-10 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60">
        <div className="font-medium">Request a Quote</div>
        <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! Our construction team will contact you.')}} className="mt-3 grid sm:grid-cols-2 gap-3">
          <input required placeholder="Full name" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
          <input placeholder="Phone" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
          <input placeholder="Project Type" className="px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
          <textarea placeholder="Describe your project" rows={4} className="sm:col-span-2 px-4 py-3 rounded bg-neutral-800/60 border border-neutral-700 outline-none"/>
          <button className="sm:col-span-2 inline-flex justify-center px-5 py-3 rounded-full bg-yellow-500 text-neutral-900 font-medium hover:bg-yellow-400 transition">Send Request</button>
        </form>
      </div>
    </div>
  );
}
