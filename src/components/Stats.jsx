import { stats } from '../constants'
import styles from '../style'
import { useCountUp } from '../hooks/useCountUp'

const Stat = ({ value, suffix, title }) => {
  const [ref, display] = useCountUp(value)

  return (
    <div className='flex-1 flex justify-start items-center flex-row m-3'>
      <h4
        ref={ref}
        // aria-label carries the settled value so screen readers announce the
        // real figure once, instead of every intermediate tick.
        aria-label={`${value}${suffix ?? ''} ${title}`}
        className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-black tabular-nums'
      >
        <span aria-hidden='true'>
          {Math.round(display).toLocaleString('en-AU')}
          {suffix}
        </span>
      </h4>
      <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-transparent bg-clip-text bg-linear-to-br from-blue-400 to-red-600 uppercase ml-3'>
        {title}
      </p>
    </div>
  )
}

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <Stat key={stat.id} {...stat} />
    ))}
  </section>
)

export default Stats
