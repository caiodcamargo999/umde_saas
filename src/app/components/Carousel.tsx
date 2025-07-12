'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  slides: React.ReactNode[];
  options?: object;
}

export function Carousel({ slides, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
