import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import JarIllustration from '../JarIllustration.jsx';

export default function ProductGallery({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // Three illustrated angles built from the same visual, since real
  // photography is added later by swapping JarIllustration for <img>.
  const slides = [product.visual, product.visual, product.visual];

  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="aspect-square w-full rounded-3xl bg-accent/50 dark:bg-white/5"
      >
        {slides.map((visual, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center p-10">
            <JarIllustration variant={visual} className="h-full w-full" label={`${product.name} view ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={3}
        spaceBetween={12}
        className="mt-3 h-20"
      >
        {slides.map((visual, i) => (
          <SwiperSlide
            key={i}
            className="cursor-pointer rounded-xl bg-accent/40 p-2 [&.swiper-slide-thumb-active]:ring-2 [&.swiper-slide-thumb-active]:ring-primary dark:bg-white/5"
          >
            <JarIllustration variant={visual} className="h-full w-full" label={`Thumbnail ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
