import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';

const CHARACTERS = [
  { id: 1, name: 'Bashful Bunny', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD709_36Pf5pKGYtC9uPiwFMGp_oiTdcZdJDZ87zAcyQNUPeDWkm6w81yGF5pzd_SeWYFRDYFx1HQWHn1F_66UJIaV9644BwRk7Z9jhscyRm1XpHwKI0zO43Qa8WXRzzxgXq2ShUtBKmz7PRPnHEA_OGHHE0aBE8gnJCFQVbh6zrHaSngC4HJ-iJtGZE-HmyXPcJ2sK-iBcaEnRaMdQ7cs1LpCEKmWZZd6ltOBmWgNT6byOKkzMH79p5JQ7neQZDzHGWZTzSWuOhMSp', category: 'Bashful' },
  { id: 2, name: 'Bartholomew Bear', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC30tx-I-Yn6wg4468YgEmR31u4tb1uqKC05JfRdkrZoIs5CLBYsqrRAn3eRIJd8ybVFBSw3nGdtotBvEKTGo12Imp4ZKHecJHFCoyZhU3FkWWfb3mhDOx4YkaGrPOttVc4tL4HiVX7QDQV2iPJXXAI_kgaBLGgXUeq1wfErx2kl4jqRNd71VDvE2TQwVu2fdj4f6X7w0q7bHqK6cm5eDzuo_1C3xYY_a0LsS8GU-_rEJp4Bj9dCHD7ndQJg5R70GuHnG_r08yxBmH', category: 'Bear' },
  { id: 3, name: 'Amuseable Toast', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMB1_noVoUWS70JMf8NMum2F-cP8Li35U9hKqaJIStLI7o5BOjGy-M4huDS1Spt7qsiVgB7i2TQpz-0-rctcnKrKsaTWvtgzuAL8IE1gwqIyKClyvkLCE9-Kp6xrbL8Nc0EU7C_IxT-wQBCABAYVcthKW-z8LXBtRv5DPdCobpqzrpN6iBcXnAPrazFzLYaqqcEqGgHzaaFAXWvAolrGU85Tpy96FooY_zQHfotcyEvmfHOz8KpA7BTBlufbOqUHq_8sotwaqdUMn8', category: 'Amuseable' },
  { id: 4, name: 'Odell Octopus', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACQ_-gllZVmsMrJssfCmq5kJDQfgk9tLG0aK0xxcEScw6_WDxWAZ4l4yKhc2e3nV0d1vlUm_f65wSo2YZa7N99l90DhgorXpeq4kBxi6CV8gtbnmGP9Td6BSkF1RN9ESKhHJezgBu4xBJj1MZSGbpVtA4AEmzowP7EDdD4Nm5IyFHOp6lfbrDGF29G8vQrEAqZNcRFHjX8h8GcMoqbCNfC_3qDgMSxxK1DHsZOG25ayLVj6-VqMadQuRuqxQnzntrZWlPNDOQG_8LC', category: 'Sea Life' },
];

export default function Characters() {
  return (
    <main className="bg-jellycat-cream min-h-screen pb-[120px]">
      <section className="pt-24 pb-12 px-6 md:px-8 max-w-[1280px] mx-auto text-center">
        <h1 className="font-display-h1 text-display-h1 text-jellycat-dark mb-4">Meet the Characters</h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl mx-auto mb-12">
          Explore our wonderfully weird and whimsically wonderful family of soft toys.
        </p>
        
        <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-2 overflow-x-auto pb-4 hide-scrollbar">
                <button className="font-caption text-caption bg-jellycat-dark text-white px-6 py-2 rounded-full whitespace-nowrap">All</button>
                <button className="font-caption text-caption bg-surface-container-low text-jellycat-dark px-6 py-2 rounded-full whitespace-nowrap hover:bg-surface-container-high transition">Amuseables</button>
                <button className="font-caption text-caption bg-surface-container-low text-jellycat-dark px-6 py-2 rounded-full whitespace-nowrap hover:bg-surface-container-high transition">Bashfuls</button>
                <button className="font-caption text-caption bg-surface-container-low text-jellycat-dark px-6 py-2 rounded-full whitespace-nowrap hover:bg-surface-container-high transition">Bears</button>
                <button className="font-caption text-caption bg-surface-container-low text-jellycat-dark px-6 py-2 rounded-full whitespace-nowrap hover:bg-surface-container-high transition">Sea Life</button>
            </div>
            <button className="font-caption text-caption hidden md:flex items-center gap-2 text-jellycat-dark border border-outline-variant px-4 py-2 rounded-lg hover:border-outline transition">
                <Filter size={16} /> Filters
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CHARACTERS.map((char) => (
             <Link key={char.id} to={`#`} className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full aspect-square bg-[#F7EEE8] overflow-hidden p-6 relative">
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-jellycat-dark uppercase tracking-wider">{char.category}</div>
                  <img src={char.image} alt={char.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-subheading-h3 text-lg text-jellycat-dark mb-1">{char.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                     <span className="font-body-base text-sm text-jellycat-warm font-medium">View details</span>
                     <ArrowRight size={16} className="text-jellycat-warm group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
             </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
