import React from 'react';

import HeroSection from '@components/HeroSection';
import FeaturesSection from '@components/FeaturesSection';
import CompanyOverviewSection from '@components/CompanyOverviewSection';
import BenefitsSection from '@components/BenefitsSection';
import TestimonialsSection from '@components/TestimonialsSection';
import Footer from '@components/Footer';
import ContactUsSection from '@src/components/ContactUsSection';

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <CompanyOverviewSection />
    <BenefitsSection />
    <TestimonialsSection />

    <ContactUsSection />
    <Footer />
  </>
);

export default HomePage;
