import React, { useState } from 'react';
import styles from './style';
import { Navbar, Hero, Stats, Business, RedesignPatio, MegaPartner, Testimonials, CTA, Footer} from './components';
import PortfolioGallery from './components/PortfolioGallery';

const App = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar onGalleryClick={() => setShowGallery(true)} />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {!showGallery && (
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
          )}

          {showGallery && <PortfolioGallery />}
        </div>
      </div>
    </div>
  );
};

export default App;
