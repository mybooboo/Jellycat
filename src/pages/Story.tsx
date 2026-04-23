import { Heart } from 'lucide-react';

export default function Story() {
  return (
    <main className="bg-jellycat-cream min-h-screen">
      <section className="pt-24 pb-16 px-6 md:px-8 max-w-[800px] mx-auto text-center">
        <span className="font-caption text-caption text-jellycat-warm mb-4 block tracking-widest uppercase">Since 1999</span>
        <h1 className="font-display-h1 text-display-h1 text-jellycat-dark mb-8">Our Quaintly Quirky Story</h1>
        <p className="font-body-base text-xl text-on-surface-variant max-w-2xl mx-auto">
          Exploring the magic of soft toys through a quirky London lens.
        </p>
      </section>

      <section className="py-12 w-full max-w-[1280px] mx-auto">
        <div className="w-full h-[500px] mb-20">
           <img 
            alt="Vintage inspired workshop with fabrics and sketches" 
            className="w-full h-full object-cover rounded-none md:rounded-2xl" 
            src="https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=2938&auto=format&fit=crop"
          />
        </div>

        <div className="max-w-[800px] mx-auto px-6 md:px-8 mb-20">
          <h2 className="font-heading-h2 text-heading-h2 text-jellycat-dark mb-6">Born in London</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-6">
            Jellycat was established in London in 1999. Since then, we have continued to combine luxurious fabrics with designs that are sometimes quirky, sometimes cute but always with a little something different that makes them stand out from the crowd!
          </p>
          <p className="font-body-base text-body-base text-on-surface-variant">
            The name Jellycat was dreamt up by a child who loved jellies and cats and giggled at the thought of the two together. The silliness of the name was a great reflection of the design and so it stuck!
          </p>
        </div>
      </section>

      <section className="bg-surface-pale-blush py-[120px] px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Heart className="text-jellycat-coral w-12 h-12 mb-6" />
            <h2 className="font-heading-h2 text-heading-h2 text-jellycat-dark mb-6">Irresistibly Soft</h2>
            <p className="font-body-base text-body-base text-on-surface-variant mb-6">
              Our designers play with the most luxurious fabrics, creating original and innovative soft toys. We are constantly experimenting to find the softest materials, ensuring that every hug is extraordinary.
            </p>
            <p className="font-body-base text-body-base text-on-surface-variant">
              From the floppy ears of our Bashful Bunnies to the comforting corduroy texture of our classic characters, tactile joy is at the heart of everything we make.
            </p>
          </div>
          <div className="h-[600px] bg-white rounded-xl overflow-hidden ambient-shadow">
             <img 
                alt="Close up of incredibly soft plush texture" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1584844308364-5e510c262070?q=80&w=2940&auto=format&fit=crop"
              />
          </div>
        </div>
      </section>
    </main>
  );
}
