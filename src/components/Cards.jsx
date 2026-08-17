const items = [
  {
    title: 'Pad Thai',
    category: 'Cuisine',
    desc: 'Stir-fried rice noodles cooked with tofu, shrimp, peanuts, and tamarind sauce.',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    title: 'Tom Yum Goong',
    category: 'Cuisine',
    desc: 'A world-famous spicy and sour soup crafted with shrimp, lemongrass, and galangal.',
    image: 'https://susiecooksthai.com/wp-content/uploads/2024/05/Tom_Yum_Goong_featuring_1-1-300x300.jpg',
    badge: 'bg-red-100 text-red-700',
  },
  {
    title: 'Songkran Festival',
    category: 'Culture',
    desc: 'The traditional Thai New Year water festival symbolizing cleansing and renewal.',
    image: 'https://api.travalot.com/attachment/568d4260-fb23-11ef-9e05-a90a1a392c84.jpg',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Historic Temples',
    category: 'Architecture',
    desc: 'Golden spires, intricate carvings, and serene shrines define Thai sacred sites.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_J1dMjzjgrcZMiYLC77rbKD7DECLYPh7K1rEwwcGZXRHtzrjdp2SWzEw&s=10',
    badge: 'bg-yellow-100 text-yellow-800',
  },
];

export default function Cards() {
  return (
    <section id="culture" className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="block text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Discover</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            Culture &amp; Culinary Highlights
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${item.badge}`}>
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}