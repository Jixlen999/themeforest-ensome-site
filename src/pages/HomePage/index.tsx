import React from 'react';

import HeroSection from '@components/HeroSection';
import FeaturesSection from '@components/FeaturesSection';
import CompanyOverviewSection from '@components/CompanyOverviewSection';
import BenefitsSection from '@components/BenefitsSection';
import TestimonialsSection from '@components/TestimonialsSection';
import OurBlogSection from '@components/OurBlogSection';
import OurPricingSection from '@components/OurPricingSection';

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <CompanyOverviewSection />
    <BenefitsSection />
    <TestimonialsSection />
    <OurPricingSection />
    <OurBlogSection />
  </>
);

export default HomePage;
