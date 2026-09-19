import {
  Hero,
  Stats,
  Business,
  RedesignPatio,
  MegaPartner,
  Testimonials,
  CTA,
  Footer,
} from '../components';

import { pageMeta } from './pageMeta';

export const meta = () =>
  pageMeta({
    title: 'Patios, Carports & Metal Roofing Sydney | Xpatios',
    description:
      'Patios, carports, decking, fencing and Colorbond metal roofing built across Sydney. Engineer-led, Stratco-backed workmanship. Get your free quote today.',
    path: '/',
  });

const Home = () => (
  <>
    <Hero />
    <Stats />
    <Business />
    <RedesignPatio />
    <MegaPartner />
    <Testimonials />
    <CTA />
    <Footer />
  </>
);

export default Home;
