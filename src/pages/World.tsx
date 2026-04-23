import { MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function World() {
  return (
    <main className="bg-jellycat-cream min-h-screen">
      <section className="pt-24 pb-16 px-6 md:px-8 max-w-[800px] mx-auto text-center">
        <h1 className="font-display-h1 text-display-h1 text-jellycat-dark mb-8">Step into our World</h1>
        <p className="font-body-base text-xl text-on-surface-variant max-w-2xl mx-auto">
          Discover magical spaces where our whimsical characters come to life.
        </p>
      </section>

      <section className="py-12 w-full max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="h-[500px] rounded-2xl overflow-hidden ambient-shadow">
            <img 
              alt="Jellycat Diner Patisserie NYC" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1555507015-d41cfa0458fd?q=80&w=2930&auto=format&fit=crop"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
               <MapPin className="text-jellycat-warm" size={24} />
               <span className="font-caption text-caption text-jellycat-warm uppercase tracking-widest">New York City</span>
            </div>
            <h2 className="font-heading-h2 text-heading-h2 text-jellycat-dark mb-6">The Jellycat Diner</h2>
            <p className="font-body-base text-body-base text-on-surface-variant mb-8">
              Experience the joy of our New York Diner pop-up. Step inside to find exclusive diner-themed Amuseables, including the iconic Amuseable Burger, Hot Dog, and Pizza. Enjoy the nostalgia of a classic diner setting with a whimsical Jellycat twist.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="font-cta-button text-cta-button bg-jellycat-dark text-white px-8 py-4 rounded-full hover:bg-stone-800 transition-colors duration-300 ease-out inline-flex items-center">
                Get Directions
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="flex flex-col justify-center order-2 lg:order-1">
             <div className="flex items-center gap-2 mb-4">
               <MapPin className="text-jellycat-pink" size={24} />
               <span className="font-caption text-caption text-jellycat-pink uppercase tracking-widest">Paris</span>
            </div>
            <h2 className="font-heading-h2 text-heading-h2 text-jellycat-dark mb-6">Jellycat Patisserie</h2>
            <p className="font-body-base text-body-base text-on-surface-variant mb-8">
              Bonjour! Indulge your sweet tooth at our Parisian Patisserie pop-up. Discover the most adorable, cuddliest pastries in the world. From delicate macarons to buttery croissants, our Amuseable bakery is a feast for the eyes and the perfect place to find a unique companion.
            </p>
             <div className="flex gap-4">
              <Link to="#" className="font-cta-button text-cta-button bg-jellycat-dark text-white px-8 py-4 rounded-full hover:bg-stone-800 transition-colors duration-300 ease-out inline-flex items-center">
                Get Directions
              </Link>
            </div>
          </div>
          <div className="h-[500px] rounded-2xl overflow-hidden ambient-shadow order-1 lg:order-2">
            <img 
              alt="Jellycat Patisserie Paris" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2944&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[120px] px-6 md:px-8">
         <div className="max-w-3xl mx-auto text-center">
          <Navigation className="text-jellycat-outline mx-auto mb-6" size={48} />
          <h2 className="font-heading-h2 text-heading-h2 text-jellycat-dark mb-8">Find a Stockist Near You</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-10">
            Jellycat friends are waiting for you at select retailers around the globe. Use our locator to find a whimsical companion near you.
          </p>
          <Link to="#" className="font-cta-button text-cta-button bg-jellycat-warm text-white px-8 py-4 rounded-full hover:bg-jellycat-pink transition-colors duration-300 ease-out inline-flex items-center">
            Store Locator
          </Link>
        </div>
      </section>
    </main>
  );
}
