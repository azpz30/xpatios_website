import React from 'react'
import { stratcoPartner } from '../assets';
import styles, { layout } from '../style';

const MegaPartner = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionImg}>
            <img src={stratcoPartner} alt='stratcoPartner' className="w-[90%] h-[90%] ml-[-150px]" />
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Xpatios Welcomes <br className='sm:block hidden'/>
                <u className='text-customRed'>Stratco</u> as our Official Supplier
            </h2>
            <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
            Exciting news! Xpatios proudly partners with Stratco, a powerhouse with 70 years of excellence 
            in building and home improvement. Together, we fuse innovation and quality, redefining outdoor 
            living. From Adelaide roots to global prominence, Stratco's journey aligns seamlessly with ours. 
            This collaboration marks a union of expertise, offering premium pergolas and home solutions. 
            Welcome to the future of outdoor sophistication: Xpatios and Stratco, elevating your living experience.
            </p>
        </div>
    </section>
  )
}

export default MegaPartner