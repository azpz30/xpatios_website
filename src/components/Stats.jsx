import { stats } from '../constants'
import { useCountUp } from '../hooks/useCountUp'
import { Section, Label } from './ui'

// Count-up logic is untouched — see useCountUp for why it starts at the
// final value (SSR/no-JS) and bails under prefers-reduced-motion.
const Stat = ({ value, suffix, title }) => {
  const [ref, display] = useCountUp(value)

  return (
    <div className="flex-1 px-3 py-6 text-center sm:px-8 sm:py-0">
      <p
        ref={ref}
        // aria-label carries the settled value so screen readers announce the
        // real figure once, instead of every intermediate tick.
        aria-label={`${value}${suffix ?? ''} ${title}`}
        className="font-display text-h1 text-ink tabular-nums"
      >
        <span aria-hidden="true">
          {Math.round(display).toLocaleString('en-AU')}
          {suffix}
        </span>
      </p>
      <Label as="p" className="mt-3">
        {title}
      </Label>
    </div>
  )
}

const Stats = () => (
  <Section spacing="tight" hairline>
    {/* Centred band rather than pinned to either gutter. Stays horizontal
        at every breakpoint. */}
    <div className="reveal-stagger mx-auto flex w-full max-w-4xl flex-row divide-x divide-hairline">
      {stats.map((stat) => (
        <Stat key={stat.id} {...stat} />
      ))}
    </div>
  </Section>
)

export default Stats
