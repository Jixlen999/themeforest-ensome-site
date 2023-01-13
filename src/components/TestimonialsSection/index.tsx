import React from 'react';
import { CardCarousel } from 'themeforest-lib';

import cards from '@src/constants/testimonailsCards';

import { Container, Wrapper } from './styled';

const TestimonialsSection = () => (
  <Wrapper>
    <Container>
      <CardCarousel title="Testimonials" cards={cards} />
    </Container>
  </Wrapper>
);

export default TestimonialsSection;
