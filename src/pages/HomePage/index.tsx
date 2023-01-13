import React from 'react';

import HeroSection from '@components/HeroSection';
import FeaturesSection from '@src/components/FeaturesSection';
import CompanyOverviewSection from '@src/components/CompanyOverviewSection';
import BenefitsSection from '@src/components/BenefitsSection';
import TestimonialsSection from '@src/components/TestimonialsSection';
import Footer from '@src/components/Footer';

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <CompanyOverviewSection />
    <BenefitsSection />
    <TestimonialsSection />

    <Footer />
  </>
);

export default HomePage;
