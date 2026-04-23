import { ChevronRight, ArrowForward, Favorite, Celebration } from '@mui/icons-material'; // Actually, let's use lucide-react icons instead
import { Heart, PartyPopper, ArrowRight, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="relative h-[921px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Soft sunlight streaming onto a collection of plush toys on a warm textured rug" 
            className="w-full h-full object-cover object-center opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV0cgQlx58mxxFv06MVDc2t3QLbaLccYxBkohFVGWU0r5paJUqlLiePXpyQmurS9hjj23stIziU8uNCMxrZCmOtZi22rQY9E-vjMLjmyy8MUWR3QW75XWtEVTj3GpAptBZj2QxOm5ZlDGIJazzX242u5J0AcDk_aXnn7OjMGjs882Q_ezaix_NswxrZoeQSgH8f7yvuDlC3xY5hOIUC5VgysOb7WfHJm5QQRes7czDLVl10lgE-tVt4YnqtLrhEEEBlpTVqtfpN3Jt"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jellycat-cream via-jellycat-cream/20 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="font-display-h1 text-display-h1 text-jellycat-dark mb-6">Whimsical Wonders Since 1999</h1>
          <p className="font-body-base text-body-base text-on-surface-variant mb-10 max-w-2xl mx-auto">Discover a world of extraordinarily soft, wildly quirky, and eternally lovable companions designed in London.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/characters" className="font-cta-button text-cta-button bg-jellycat-warm text-white px-8 py-4 rounded-full hover:bg-jellycat-pink transition-colors duration-300 ease-out inline-flex items-center">
              Explore Characters
            </Link>
            <Link to="/story" className="font-cta-button text-cta-button bg-surface-container-lowest text-jellycat-dark px-8 py-4 rounded-full ambient-shadow hover:scale-[1.02] transition-transform duration-300 ease-out inline-flex items-center">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-8 bg-jellycat-cream">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="text-jellycat-warm w-10 h-10 mx-auto mb-6 fill-current" />
          <p className="font-heading-h2 text-heading-h2 text-jellycat-dark mb-8">Spreading joy through irresistibly soft and curiously quirky companions.</p>
          <p className="font-body-base text-body-base text-on-surface-variant">Every Jellycat character is thoughtfully designed in London with a distinctive personality and a deeply tactile softness that brings comfort to all ages.</p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-heading-h2 text-heading-h2 text-jellycat-dark">Meet the Icons</h2>
          <Link to="/characters" className="font-cta-button text-cta-button text-jellycat-warm hover:text-jellycat-pink transition-colors duration-300 hidden md:inline-flex items-center gap-2">
            View all <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Link to="#" className="group md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow hover:scale-[1.02] transition-transform duration-500 ease-out flex flex-col sm:flex-row h-full">
            <div className="w-full sm:w-1/2 h-64 sm:h-auto overflow-hidden bg-surface-pale-blush">
              <img alt="Bashful Bunny" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD709_36Pf5pKGYtC9uPiwFMGp_oiTdcZdJDZ87zAcyQNUPeDWkm6w81yGF5pzd_SeWYFRDYFx1HQWHn1F_66UJIaV9644BwRk7Z9jhscyRm1XpHwKI0zO43Qa8WXRzzxgXq2ShUtBKmz7PRPnHEA_OGHHE0aBE8gnJCFQVbh6zrHaSngC4HJ-iJtGZE-HmyXPcJ2sK-iBcaEnRaMdQ7cs1LpCEKmWZZd6ltOBmWgNT6byOKkzMH79p5JQ7neQZDzHGWZTzSWuOhMSp"/>
            </div>
            <div className="p-8 sm:w-1/2 flex flex-col justify-center">
              <span className="font-caption text-caption text-jellycat-warm mb-2 uppercase tracking-widest">Bestseller</span>
              <h3 className="font-subheading-h3 text-subheading-h3 text-jellycat-dark mb-4">Bashful Bunny</h3>
              <p className="font-body-base text-body-base text-on-surface-variant mb-6">The original classic. Incredibly soft, hopelessly floppy, and ready for endless hugs.</p>
              <span className="inline-flex items-center font-caption text-caption text-jellycat-dark group-hover:text-jellycat-pink transition-colors duration-300">
                Discover <ChevronRightIcon size={16} className="ml-1" />
              </span>
            </div>
          </Link>

          <Link to="#" className="group md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow hover:scale-[1.02] transition-transform duration-500 ease-out flex flex-col h-full">
            <div className="w-full h-48 md:h-64 overflow-hidden bg-surface-warm-white">
              <img alt="Bartholomew Bear plush" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC30tx-I-Yn6wg4468YgEmR31u4tb1uqKC05JfRdkrZoIs5CLBYsqrRAn3eRIJd8ybVFBSw3nGdtotBvEKTGo12Imp4ZKHecJHFCoyZhU3FkWWfb3mhDOx4YkaGrPOttVc4tL4HiVX7QDQV2iPJXXAI_kgaBLGgXUeq1wfErx2kl4jqRNd71VDvE2TQwVu2fdj4f6X7w0q7bHqK6cm5eDzuo_1C3xYY_a0LsS8GU-_rEJp4Bj9dCHD7ndQJg5R70GuHnG_r08yxBmH"/>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-subheading-h3 text-xl text-jellycat-dark mb-2">Bartholomew Bear</h3>
                <p className="font-body-base text-sm text-on-surface-variant">The perfect vintage-style companion.</p>
              </div>
            </div>
          </Link>

          <Link to="#" className="group md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow hover:scale-[1.02] transition-transform duration-500 ease-out flex flex-col h-full">
            <div className="w-full h-48 overflow-hidden bg-[#F0EBE1]">
              <img alt="Amuseable Toast plush" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMB1_noVoUWS70JMf8NMum2F-cP8Li35U9hKqaJIStLI7o5BOjGy-M4huDS1Spt7qsiVgB7i2TQpz-0-rctcnKrKsaTWvtgzuAL8IE1gwqIyKClyvkLCE9-Kp6xrbL8Nc0EU7C_IxT-wQBCABAYVcthKW-z8LXBtRv5DPdCobpqzrpN6iBcXnAPrazFzLYaqqcEqGgHzaaFAXWvAolrGU85Tpy96FooY_zQHfotcyEvmfHOz8KpA7BTBlufbOqUHq_8sotwaqdUMn8"/>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="font-caption text-caption text-jellycat-pink mb-1 block">Amuseables</span>
                <h3 className="font-subheading-h3 text-xl text-jellycat-dark mb-2">Amuseable Toast</h3>
                <p className="font-body-base text-sm text-on-surface-variant">A smiling slice of morning joy.</p>
              </div>
            </div>
          </Link>

          <Link to="#" className="group md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow hover:scale-[1.02] transition-transform duration-500 ease-out flex flex-col h-full">
            <div className="w-full h-48 overflow-hidden bg-[#E8F0ED]">
              <img alt="Odell Octopus plush" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACQ_-gllZVmsMrJssfCmq5kJDQfgk9tLG0aK0xxcEScw6_WDxWAZ4l4yKhc2e3nV0d1vlUm_f65wSo2YZa7N99l90DhgorXpeq4kBxi6CV8gtbnmGP9Td6BSkF1RN9ESKhHJezgBu4xBJj1MZSGbpVtA4AEmzowP7EDdD4Nm5IyFHOp6lfbrDGF29G8vQrEAqZNcRFHjX8h8GcMoqbCNfC_3qDgMSxxK1DHsZOG25ayLVj6-VqMadQuRuqxQnzntrZWlPNDOQG_8LC"/>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-subheading-h3 text-xl text-jellycat-dark mb-2">Odell Octopus</h3>
                <p className="font-body-base text-sm text-on-surface-variant">Eight arms for the best hugs.</p>
              </div>
            </div>
          </Link>

          <Link to="#" className="group md:col-span-4 bg-jellycat-warm rounded-xl overflow-hidden ambient-shadow hover:scale-[1.02] transition-transform duration-500 ease-out p-8 flex flex-col justify-center items-center text-center">
            <PartyPopper size={48} className="text-white mb-4" />
            <h3 className="font-subheading-h3 text-xl text-white mb-2">New Arrivals</h3>
            <p className="font-body-base text-sm text-white/90 mb-6">Discover our latest quirky characters just added to the family.</p>
            <span className="font-cta-button text-cta-button bg-white text-jellycat-warm px-6 py-2 rounded-full inline-block group-hover:bg-jellycat-pink group-hover:text-white transition-colors duration-300">
              Shop New
            </span>
          </Link>
        </div>
      </section>

      <section className="py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto">
        <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <span className="font-caption text-caption text-jellycat-warm mb-4 uppercase tracking-widest">Experience</span>
            <h2 className="font-heading-h2 text-heading-h2 text-jellycat-dark mb-6">The Jellycat Diner</h2>
            <p className="font-body-base text-body-base text-on-surface-variant mb-8">Step into our whimsical world. Visit our exclusive pop-up experiences where our Amuseables come to life. Exclusive merchandise, photo moments, and endless joy await.</p>
            <div>
              <Link to="/world" className="font-cta-button text-cta-button bg-jellycat-dark text-white px-8 py-4 rounded-full hover:bg-jellycat-warm transition-colors duration-300 ease-out inline-flex items-center">
                Find Locations
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto">
            <img alt="A whimsical diner setting with pastel colors" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd6uL5yu1HKXZ4-41KiJwXQ_ICHiMaDoo9F2XDXK103dVzkpQjlyK6cZpUPWkYKn1Ti7psXmRk0VS1NjB1PIEkwGxfqppNpnoU_0uVZYx9lsvCcz-Oskf5_REA3hQK33nzIBlfHqbk_Sy7iZzgJLyYW6fCEbjH1P-zJbgwQJUYVD_UY38KXXawkL6ByYGIzU9aw4XRPUiqYQ89AUlqnqcNaxd5CkZMUv8-47llIAhy-9q3GPv-o0baQkbbZs1d5HKuLaxfrfB5EMtj"/>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-8 bg-surface-pale-blush">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading-h2 text-3xl md:text-heading-h2 text-jellycat-dark mb-4">Join the Family</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-8">Sign up for our newsletter to hear about new arrivals, exclusive pop-ups, and all things whimsical.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-grow font-body-base text-body-base px-6 py-4 rounded-full border border-outline-variant focus:border-jellycat-warm focus:ring-1 focus:ring-jellycat-warm bg-surface-container-lowest text-jellycat-dark placeholder:text-text-muted-gray outline-none transition-all duration-300" placeholder="Your email address" type="email"/>
            <button className="font-cta-button text-cta-button bg-jellycat-warm text-white px-8 py-4 rounded-full hover:bg-jellycat-pink transition-colors duration-300 ease-out whitespace-nowrap" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
