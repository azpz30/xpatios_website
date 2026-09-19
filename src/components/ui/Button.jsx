// The accent lives here and in link hover — nowhere else.
const VARIANTS = {
  primary:
    'bg-accent text-white hover:bg-accent-hover',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-paper',
  ghost:
    'text-ink underline decoration-hairline underline-offset-[6px] hover:decoration-accent',
  onDark:
    'border border-white/70 text-white hover:bg-white hover:text-ink',
};

const SIZES = {
  // ≥44px tall — comfortably clears WCAG 2.2 target size.
  md: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-body',
};

const Button = ({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) => (
  <Tag
    className={`inline-flex items-center justify-center gap-2 font-sans font-medium transition-colors duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    {...rest}
  >
    {children}
  </Tag>
);

export default Button;
