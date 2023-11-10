import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const Business = () => {

  const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimWhite`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimBlack text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );

  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Build Your Dreams, <br className='sm:block hidden'/>We'll Handle the Construction.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right design and a skilled team, you can transform an ordinary space into an outdoor oasis, crafting pergolas and patios that bring comfort and elegance to your home, one project at a time.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business