import { Container, Heading, Prose } from '../components/ui';
import PortfolioGallery from '../components/PortfolioGallery';
import { pageMeta } from './pageMeta';
import { Footer } from '../components';

export const meta = () =>
  pageMeta({
    title: 'Project Gallery | Patios, Decking & Roofing in Sydney | Xpatios',
    description:
      'Photographs of completed Xpatios projects across Sydney, patios, pergolas, carports, decking, fencing and Colorbond metal roofing.',
    path: '/gallery',
  });

const Gallery = () => (
  <>
    <div className="pb-8 md:pb-10">
      <Container>
        <Heading as="h1" size="h1">
          Our work
        </Heading>
        <Prose className="mt-5">
          A working record of the patios, pergolas and roofing jobs
          we&rsquo;ve completed across Sydney.
        </Prose>
      </Container>
    </div>
    <PortfolioGallery />
    <Footer />
    </>
);

export default Gallery;
