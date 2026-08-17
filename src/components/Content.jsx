export default function Content() {
  return (
    <section id="history" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-amber-100 rounded-2xl rotate-2 -z-10"></div>
          <img
            src="https://res-1.cloudinary.com/gorealtravel/image/upload/,f_auto,q_50/v1563889832/production/marketing/city/5d3181c870428e0008e0845c/city_main_image/BANGKOK.webp"
            alt="Temples of Thailand"
            className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Text */}
        <div>
          <span className="block text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">
            Heritage &amp; Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            History &amp; <span className="text-blue-600">ASEAN</span> Role
          </h2>

          <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              Thailand, historically known as <strong className="text-gray-900">Siam</strong>, is situated at the
              centre of mainland Southeast Asia. It is the only nation in the region never colonized by a European
              power — allowing its royal traditions and cultural heritage to flourish uninterrupted.
            </p>
            <p>
              As a founding member of <strong className="text-blue-700">ASEAN</strong> in 1967, Thailand signed
              the Bangkok Declaration that established the bloc, cementing its role as a pivotal hub for trade,
              tourism, and cultural exchange across Southeast Asia.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 border-l-4 border-amber-500 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-900 mb-1">Never Colonized</h4>
              <p className="text-sm text-gray-500">Preserved a unique monarchy and traditions.</p>
            </div>
            <div className="p-5 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-900 mb-1">Founding Member</h4>
              <p className="text-sm text-gray-500">Signed the Bangkok Declaration in 1967.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}