'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link'

const slides = [
  {
    title: 'Welcome to PremierHelix Health',
    description: 'Leading the way in compassionate care, empowering families, and transforming lives, one child, one patient, and one community at a time.',
    image: '/images/carousel/Slide1.jpg',
    link: '#conditions', // Add link for "Learn More" button
  },
  {
    title: 'Innovating Your Future',
    description: 'Dedicated to providing advanced solutions<br>tailored to your needs.',
    image: '/images/carousel/Slide2.jpg',
    link: '#conditions', // Add link for "Learn More" button
  },
  {
    title: 'Expert Neurological Care, Anywhere You Are',
    description:
      'Specialized virtual consultations for epilepsy,<br>stroke recovery, headaches,<br>movement disorders, and dementia.',
    image: '/images/carousel/Slide3.jpg',
    link: '#conditions', // Add link for "Learn More" button
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleLearnMoreClick = (index) => {
    setHoveredIndex(index === hoveredIndex ? null : index); // Toggle hover effect
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-100 to-blue-50 w-full h-auto overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-100 to-white opacity-80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 shadow-lg transition lg:-translate-x-16 z-10"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slide Content */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col lg:flex-row items-center gap-6 w-full ${
              hoveredIndex === currentIndex ? 'scale-105' : ''
            }`}
          >
            {/* Text Section */}
            <div className="text-center lg:text-left max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                {slides[currentIndex].title}
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: slides[currentIndex].description }}
              ></p>
              {/* Learn More Button */}
            
                <Link
  href='#conditions' // Replace with the desired internal link
  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition"
>
  Learn More
</Link>
           
            </div>

            {/* Image Section */}
            <div className="flex-1 h-[300px] sm:h-[400px] lg:h-[450px] bg-gray-300 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <motion.img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 shadow-lg transition lg:translate-x-16 z-10"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
