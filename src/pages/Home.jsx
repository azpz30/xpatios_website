import React from 'react';
import styles from '../style';
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

const Home = () => (
  <>
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
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
