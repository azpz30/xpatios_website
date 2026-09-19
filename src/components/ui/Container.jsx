const WIDTHS = {
  prose: 'max-w-[42rem]',   // ~45ch, running text
  content: 'max-w-[1310px]', // main content column
  wide: 'max-w-[1600px]',
};

const Container = ({ as: Tag = 'div', width = 'content', className = '', children, ...rest }) => (
  <Tag className={`mx-auto w-full px-5 sm:px-8 md:px-12 ${WIDTHS[width]} ${className}`} {...rest}>
    {children}
  </Tag>
);

export default Container;
