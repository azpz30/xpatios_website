import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from '../style';

// Preload images
const imageModules = import.meta.glob('../assets/xpGallery/*.jpeg', { eager: true });
// Sort numerically (xp2 before xp10) so the carousel order is stable and
// the slide count follows the directory rather than a hardcoded range.
const slides = Object.keys(imageModules)
  .sort((a, b) => {
    const n = (s) => Number(s.match(/xp(\d+)\.jpeg$/)?.[1] ?? 0);
    return n(a) - n(b);
  })
  .map((key) => imageModules[key].default);

const Hero = () => {
  const [currentIndex, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  const imgStyles = {
    backgroundImage: `url(${slides[currentIndex]})`,
    backgroundSize: 'cover', // Ensure the image covers the entire container
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return (
    <div className='w[1200px] h-[85vh] m-auto py-8 px-4 relative'>
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={imgStyles}></div>
      <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Hero;
