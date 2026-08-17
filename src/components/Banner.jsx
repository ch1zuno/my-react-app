import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://cdn.tourradar.com/s3/serp/1500x800/4600_t8afNwa2.jpg',
    title: 'Discover Thailand',
    subtitle: 'The Land of Smiles in the Heart of ASEAN',
  },
  {
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1920&q=80',
    title: 'Ancient Temples',
    subtitle: 'Explore magnificent ruins and sacred sanctuaries',
  },
  {
    image: 'https://www.travelcenter.uk/blog/wp-content/uploads/2024/11/beach.jpg',
    title: 'Pristine Beaches',
    subtitle: 'Relax on world-renowned tropical islands',
  },
];

export default function Banner() {
  return (
    <section id="banner" className="relative w-full h-screen min-h-[500px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Centered content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light mb-8 max-w-xl drop-shadow">
                  {slide.subtitle}
                </p>
                <a
                  href="#history"
                  className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start Exploring
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}