// Every project photo goes through here. One aspect ratio + one grade across
// the set is what stops 53 phone snapshots reading as a phone gallery.
const RATIOS = {
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-video',
  auto: '', // no forced ratio — the image keeps its own proportions
};

const Figure = ({
  src,
  alt,
  ratio = '4/5',
  caption,
  treatment = 'grade', // 'grade' | 'texture' | 'none'
  // 'cover' crops to fill, which is right for photography. Use 'contain' for
  // anything with baked-in text or a logo (supplier graphics, diagrams) —
  // cropping those loses content, and zooming them cuts words in half.
  fit = 'cover',
  // `multiply` knocks a baked-in white background out against the page.
  // Correct for line diagrams and logos supplied on white; wrong for
  // photographs, which it would darken.
  blend = false,
  className = '',
  ...rest
}) => {
  const isContain = fit === 'contain';

  return (
    <figure className={`relative ${className}`}>
      <div className={`${RATIOS[ratio]} overflow-hidden ${isContain ? '' : 'bg-surface'}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={[
            'h-full w-full',
            isContain ? 'object-contain' : 'object-cover',
            // Zoom only applies to cover-fit photography. On a contained
            // graphic it pushes text past the frame edge.
            isContain ? '' : 'transition-transform duration-[600ms] ease-out hover:scale-[1.04]',
            treatment === 'texture' ? 'photo-texture' : treatment === 'grade' ? 'photo-grade' : '',
            blend ? 'mix-blend-multiply' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        />
      </div>
      {caption && <figcaption className="mt-3 text-small text-muted">{caption}</figcaption>}
    </figure>
  );
};

export default Figure;
