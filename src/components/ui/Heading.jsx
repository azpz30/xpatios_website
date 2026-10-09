const SIZES = {
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
};

// Visual size is decoupled from heading level so we never skip levels
// for styling reasons — a common a11y failure on marketing sites.
const Heading = ({ as: Tag = 'h2', size = 'h2', className = '', children, ...rest }) => (
  <Tag className={`font-display text-ink ${SIZES[size]} ${className}`} {...rest}>
    {children}
  </Tag>
);

export default Heading;
