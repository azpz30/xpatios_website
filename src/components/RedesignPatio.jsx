import React from 'react'
import { patioDesigns } from '../assets';
import styles, { layout } from '../style';

const RedesignPatio = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Discover Versatile Elegance with <br className='sm:block hidden'/>
                Our <u>Diverse Pergola</u> Styles
            </h2>
            <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
                Indulge in outdoor sophistication with our curated collection of pergola styles. 
                From the sleek lines of Flat Sunroom Roofing to the timeless charm of Gabled Roof Awning, 
                our designs redefine outdoor living. Whether freestanding or attached, each pergola is a 
                statement of style, transforming your space into a personalized retreat. Discover the perfect 
                blend of form and function with our versatile options. Welcome to a world where elegance meets 
                versatility, and your outdoor dreams take shape effortlessly.
            </p>
        </div>
        <div className={layout.sectionImg}>
            <img src={patioDesigns} alt='patioDesigns' className="w-[100%] h-[100%]"/>
        </div>
    </section>
  )
}

export default RedesignPatio