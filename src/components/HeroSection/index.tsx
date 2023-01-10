import React from 'react';
import hero_img from '@assets/hero_img.png';

import { HeroImage, ImageContainer, Text, TextContainer, Title, Wrapper } from './styled';

const HeroSection = () => (
  <Wrapper>
    <TextContainer>
      <Title>
        Find true power in your data with <span>Ensome</span>
      </Title>
      <Text>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi.
      </Text>
    </TextContainer>
    <ImageContainer>
      <HeroImage src={hero_img} />
    </ImageContainer>
  </Wrapper>
);

export default HeroSection;
