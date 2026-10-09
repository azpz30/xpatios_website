// Measure capped at 65ch. Long-line body copy is the quietest way to
// make a page feel amateur.
const Prose = ({ size = 'body', className = '', children, ...rest }) => (
  <p
    className={`${size === 'lede' ? 'text-lede text-ink/80' : 'text-body'} max-w-[65ch] ${className}`}
    {...rest}
  >
    {children}
  </p>
);

export default Prose;
