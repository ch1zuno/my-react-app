export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

        {/* Brand */}
        <div>
          <p className="text-2xl font-black mb-3">
            <span className="text-amber-400">🇹🇭</span> THAILAND
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Discover the Land of Smiles — rich history, incredible food, and pristine nature in the heart of ASEAN.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-base font-bold mb-4 pb-2 border-b border-gray-700">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#banner" className="hover:text-amber-400 transition-colors">Home</a></li>
            <li><a href="#history" className="hover:text-amber-400 transition-colors">History &amp; ASEAN Role</a></li>
            <li><a href="#culture" className="hover:text-amber-400 transition-colors">Culture &amp; Highlights</a></li>
          </ul>
        </div>

        {/* ASEAN flag strip */}
        <div>
          <h4 className="text-base font-bold mb-4 pb-2 border-b border-gray-700">ASEAN Member States</h4>
          <div className="flex flex-wrap gap-3 text-2xl">
            {[
              { flag: '🇹🇭', name: 'Thailand', active: true },
              { flag: '🇻🇳', name: 'Vietnam' },
              { flag: '🇮🇩', name: 'Indonesia' },
              { flag: '🇲🇾', name: 'Malaysia' },
              { flag: '🇸🇬', name: 'Singapore' },
              { flag: '🇵🇭', name: 'Philippines' },
              { flag: '🇲🇲', name: 'Myanmar' },
              { flag: '🇧🇳', name: 'Brunei' },
              { flag: '🇰🇭', name: 'Cambodia' },
              { flag: '🇱🇦', name: 'Laos' },
            ].map((c) => (
              <span
                key={c.name}
                title={c.name}
                className={`transition-opacity cursor-default ${c.active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
              >
                {c.flag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
        <p>© {new Date().getFullYear()} ASEAN Spotlight — Thailand Landing Page</p>
        <p>Designed with ❤️ for the web</p>
      </div>
    </footer>
  );
}