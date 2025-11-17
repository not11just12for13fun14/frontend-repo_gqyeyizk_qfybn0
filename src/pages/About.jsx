export default function About(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold">About Us</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium">Mission</h2>
          <p className="text-neutral-400 mt-2">To develop and construct exceptional spaces that elevate the way people live, work, and experience Mexico.</p>
          <h2 className="mt-6 text-xl font-medium">Vision</h2>
          <p className="text-neutral-400 mt-2">Be the benchmark in luxury developments in Latin America, merging architecture, technology, and sustainability.</p>
          <h2 className="mt-6 text-xl font-medium">Values</h2>
          <ul className="text-neutral-400 mt-2 list-disc list-inside space-y-1">
            <li>Integrity & Transparency</li>
            <li>Design Excellence</li>
            <li>Innovation & Sustainability</li>
            <li>Client-Centered Approach</li>
          </ul>
        </div>
        <div>
          <img className="w-full rounded" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"/>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Leadership</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="text-center">
              <img className="w-full aspect-square object-cover rounded" src={`https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop`} />
              <div className="mt-2">Executive {i}</div>
              <div className="text-sm text-neutral-500">Partner</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">Certified Builder MX</div>
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">LEED Awareness</div>
        <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">Award: Best Urban Project 2024</div>
      </div>
    </div>
  );
}
