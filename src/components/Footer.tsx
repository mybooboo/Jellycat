import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 ease-out duration-300">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4 md:col-span-1">
          <span className="font-heading-h2 font-bold text-stone-900 dark:text-stone-100 text-xl tracking-tighter">Jellycat</span>
          <p className="font-heading-h2 text-sm text-stone-500 dark:text-stone-400">© 2024 Jellycat London. All whimsical rights reserved.</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="#" className="font-heading-h2 text-sm text-jellycat-warm font-semibold hover:text-jellycat-warm underline decoration-2 underline-offset-4 transition-all">Privacy Policy</Link>
          <Link to="#" className="font-heading-h2 text-sm text-stone-500 dark:text-stone-400 hover:text-jellycat-warm underline decoration-2 underline-offset-4 transition-all">Terms of Service</Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="#" className="font-heading-h2 text-sm text-stone-500 dark:text-stone-400 hover:text-jellycat-warm underline decoration-2 underline-offset-4 transition-all">Shipping & Returns</Link>
          <Link to="#" className="font-heading-h2 text-sm text-stone-500 dark:text-stone-400 hover:text-jellycat-warm underline decoration-2 underline-offset-4 transition-all">Contact Us</Link>
        </div>

        <div></div>
      </div>
    </footer>
  );
}
