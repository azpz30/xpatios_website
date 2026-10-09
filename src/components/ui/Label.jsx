// Small uppercase eyebrow. Muted, never ink — it's metadata, not content.
const Label = ({ as: Tag = 'span', className = '', children, ...rest }) => (
  <Tag
    className={`text-label font-mono uppercase tracking-[0.08em] text-muted ${className}`}
    {...rest}
  >
    {children}
  </Tag>
);

export default Label;
