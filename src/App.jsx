import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';
import { Navbar, Hero, Stats, Business, RedesignPatio, MegaPartner, Testimonials, CTA, Footer } from './components';
import PortfolioGallery from './components/PortfolioGallery';

const App = () => {
  return (
    <Router>
      <div className="bg-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route path="/gallery" element={<PortfolioGallery />} />
              <Route
                path="/"
                element={
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
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;