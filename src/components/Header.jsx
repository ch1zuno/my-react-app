import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#banner" className={`text-xl font-black tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
          <span className="text-amber-400">🇹🇭</span> THAILAND
        </a>

        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
          <a href="#banner" className="hover:text-amber-400 transition-colors duration-200">Home</a>
          <a href="#history" className="hover:text-amber-400 transition-colors duration-200">History</a>
          <a href="#culture" className="hover:text-amber-400 transition-colors duration-200">Culture</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-gray-700">
          <a href="#banner" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#history" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 transition-colors">History</a>
          <a href="#culture" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 transition-colors">Culture</a>
        </div>
      )}
    </header>
  );
}