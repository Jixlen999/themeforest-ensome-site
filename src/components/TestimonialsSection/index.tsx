import React from 'react';
import { CardCarousel } from 'themeforest-lib';

import cards from '@src/constants/testimonialsCards';

import Wrapper from './styled';

const TestimonialsSection = () => (
  <Wrapper>
    <CardCarousel title="Testimonials" cards={cards} />
  </Wrapper>
);

export default TestimonialsSection;
