/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { MyButton } from 'themeforest-lib';

import HeroSection from '@components/HeroSection';
import FeaturesSection from '@src/components/FeaturesSection';
import CompanyOverviewSection from '@src/components/CompanyOverviewSection';
import BenefitsSection from '@src/components/BenefitsSection';
import TestimonialsSection from '@src/components/TestimonialsSection';

const HomePage = () => (
  <>
    <MyButton />
    <HeroSection />
    <FeaturesSection />
    <CompanyOverviewSection />
    <BenefitsSection />
    <TestimonialsSection />
  </>
);

export default HomePage;
