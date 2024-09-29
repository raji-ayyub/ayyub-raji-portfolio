'use client';

import React, { useEffect, useRef, useState } from 'react';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const slides = [
    '@/public/images/L.jpg',
    '@/public/images/L.jpg',
    '@/public/images/L.jpg',
    // Add as many slides as needed
  ];

  const totalSlides = slides.length;

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="overflow-hidden border relative w-[10rem]  h-64">
      <div ref={slideRef} className="flex transition-transform duration-500">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[5rem] bg-cover border border-red-400 bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      {/* Navigation dots */}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 border rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default Carousel;
