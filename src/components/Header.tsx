import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Header() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return clsx(
      "font-heading-h2 text-sm font-medium tracking-wide transition-colors duration-300 active:scale-95 whitespace-nowrap",
      isActive 
        ? "text-jellycat-warm border-b-2 border-jellycat-warm pb-1" 
        : "text-stone-600 dark:text-stone-400 hover:text-jellycat-pink"
    );
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-jellycat-cream/90 backdrop-blur-md dark:bg-stone-950/90 border-b border-stone-200/50 dark:border-stone-800 shadow-sm ease-out duration-300">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto">
        <div className="flex-shrink-0 md:hidden">
          <Link to="/" className="font-heading-h2 text-2xl font-black text-stone-900 dark:text-white tracking-tighter hover:text-jellycat-pink transition-colors duration-300">
            Jellycat
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-start gap-8 items-center">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/story" className={getLinkClass("/story")}>Our Story</Link>
          <Link to="/characters" className={getLinkClass("/characters")}>Characters</Link>
          <Link to="/collections" className={getLinkClass("/collections")}>Collections</Link>
          <Link to="/world" className={getLinkClass("/world")}>World</Link>
          <Link to="/find-us" className={getLinkClass("/find-us")}>Find Us</Link>
        </nav>

        <div className="hidden md:flex flex-shrink-0 mx-auto absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="font-heading-h2 text-2xl font-black text-stone-900 dark:text-white tracking-tighter hover:text-jellycat-pink transition-colors duration-300">
            Jellycat
          </Link>
        </div>

        <div className="flex items-center gap-4 text-jellycat-warm dark:text-[#D99A82]">
          <button aria-label="search" className="hover:text-jellycat-pink transition-colors duration-300 active:scale-95">
            <Search size={24} />
          </button>
          <button aria-label="shopping_bag" className="hover:text-jellycat-pink transition-colors duration-300 active:scale-95">
            <ShoppingBag size={24} />
          </button>
          <button aria-label="menu" className="md:hidden hover:text-jellycat-pink transition-colors duration-300 active:scale-95">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile nav overlay trigger for static view */}
      <div className="md:hidden flex justify-start space-x-6 py-4 bg-surface-container-lowest border-b border-surface-container-high px-4 overflow-x-auto">
         <Link to="/" className={getLinkClass("/")}>Home</Link>
         <Link to="/story" className={getLinkClass("/story")}>Our Story</Link>
         <Link to="/world" className={getLinkClass("/world")}>World</Link>
      </div>
    </header>
  );
}
