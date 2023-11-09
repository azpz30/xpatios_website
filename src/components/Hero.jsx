import styles from '../style'
import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Hero = () => {
    const [currentIndex, setIndex] = useState(1)
    const prevSlide = () => {
        const isFirstSlide = currentIndex == 1
        const newIndex = isFirstSlide ? 10 : currentIndex - 1
        setIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex == 10
        const newIndex = isLastSlide ? 1 : currentIndex + 1
        setIndex(newIndex)
    }

    // const imgClassName = `w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-xp${currentIndex}`;

    const imgStyles = {
        backgroundImage: `url("../src/assets/xp${currentIndex}.jpeg")`, // Update the path
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      };
    
    return (
        <div className='w[1200px] h-[85vh] m-auto py-8 px-4 relative'>
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={imgStyles}>

            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide}  size={30}/>
            </div>

            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
        </div>
    )
}
export default Hero