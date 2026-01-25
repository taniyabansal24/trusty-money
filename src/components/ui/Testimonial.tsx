// components/ui/TestimonialSlider.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Container from './Container';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  flipQuote?: string;
  image?: string;
  initials?: string;
  imageColor?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoSlideInterval?: number;
  showControls?: boolean;
  showPagination?: boolean;
  title?: string;
  subtitle?: string;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoSlideInterval = 4000,
  showControls = true,
  showPagination = true,
  title = "Trusted by Finance Teams Worldwide",
  subtitle = "Leading companies rely on Trusty Money for their cross-border payments"
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Calculate slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3;
    
    const width = window.innerWidth;
    if (width < 640) return 1;    // Mobile: 1 card
    if (width < 1024) return 2;   // Tablet: 2 cards
    return 3;                     // Desktop: 3 cards
  };

  const totalSlides = testimonials.length;
  const maxSlide = Math.max(0, totalSlides - slidesPerView);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
      setSlidesPerView(newSlidesPerView);
      setCurrentSlide(prev => Math.min(prev, Math.max(0, totalSlides - newSlidesPerView)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalSlides]);

  // Auto slide functionality
  useEffect(() => {
    if (isPaused || maxSlide === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isPaused, maxSlide, autoSlideInterval]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  }, [maxSlide]);

  // Render initials avatar if no image
  const renderAvatar = (testimonial: Testimonial) => {
    if (testimonial.image) {
      return (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      );
    }
    
    return (
      <div 
        className={`w-12 h-12 rounded-full flex items-center justify-center ${testimonial.imageColor || 'bg-blue-100'}`}
      >
        <span className="text-body font-semibold text-gray-700">
          {testimonial.initials || testimonial.name.charAt(0)}
        </span>
      </div>
    );
  };

  return (
    <>
      {/* Slider Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        {showControls && (
          <>
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-0 md:left-[-10px] lg:left-[-30px] top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-0 md:right-[-10px] lg:right-[-30px] top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Slider Track */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 px-3"
                style={{ 
                  width: `${100 / slidesPerView}%`,
                  minWidth: `${100 / slidesPerView}%`
                }}
              >
                {/* Testimonial Card - Enhanced Design */}
                <div className="bg-white rounded-xl h-full p-6 flex flex-col border border-gray-200 hover:border-blue-200 transition-all duration-300 group">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z" />
                    </svg>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-grow mb-6">
                    <p className="text-gray-600 feature-description leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <div className="mr-4">
                      {renderAvatar(testimonial)}
                    </div>
                    <div>
                      <h4 className="text-gray-900 text-body font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm mt-0.5">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {showControls && (
        <div className="flex justify-center items-center space-x-4 mt-8 sm:hidden">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
          >
            {isPaused ? (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Pagination Dots */}
      {showPagination && maxSlide > 0 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-1.5 bg-[#073F9E]' 
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {/* <div className="text-center mt-6 text-gray-500 text-sm">
        <span className="font-medium">{currentSlide + 1}-{Math.min(currentSlide + slidesPerView, totalSlides)}</span>
        <span className="mx-1">of</span>
        <span className="font-medium">{totalSlides}</span>
        <span className="ml-1">testimonials</span>
      </div> */}
    </>
  );
};

export default TestimonialSlider;