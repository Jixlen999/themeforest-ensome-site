/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import { Card, Container, ControlButton, Controls, Title, TitleAndControls, Wrapper } from './styled';

const TestimonialsSection = () => {
  const setts = { color: ' #002B4E', size: '30px' };
  return (
    <Wrapper>
      <Container>
        <TitleAndControls>
          <Title>Testimonials</Title>
          <Controls>
            <IconContext.Provider value={setts}>
              <ControlButton>
                <HiOutlineArrowNarrowLeft />
              </ControlButton>
              <ControlButton>
                <HiOutlineArrowNarrowRight />
              </ControlButton>
            </IconContext.Provider>
          </Controls>
        </TitleAndControls>

        <Card>as</Card>
      </Container>
    </Wrapper>
  );
};

export default TestimonialsSection;
