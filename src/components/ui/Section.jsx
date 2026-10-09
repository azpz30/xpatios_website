import Container from './Container';

// Section rhythm from real editorial sites: 104–150px normal,
// ~246px for major structural breaks.
const SPACING = {
  tight: 'py-16 md:py-20',
  normal: 'py-24 md:py-32',
  loose: 'py-32 md:py-52',
};

const Section = ({
  as: Tag = 'section',
  spacing = 'normal',
  width = 'content',
  hairline = false,
  className = '',
  containerClassName = '',
  children,
  ...rest
}) => (
  <Tag className={`${SPACING[spacing]} ${hairline ? 'hairline-t' : ''} ${className}`} {...rest}>
    <Container width={width} className={containerClassName}>
      {children}
    </Container>
  </Tag>
);

export default Section;
