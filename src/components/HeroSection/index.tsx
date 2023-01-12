import React from 'react';
import hero_img from '@assets/hero_img.png';
import { RoundButton } from 'themeforest-lib';

import { HeroImage, ImageContainer, Text, TextContainer, Title, Wrapper, RoundButtonContainer } from './styled';

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
      <RoundButtonContainer>
        <RoundButton size={140} text="Learn more" fontSize={14} fontWeight={600} />
      </RoundButtonContainer>
      <HeroImage src={hero_img} />
    </ImageContainer>
  </Wrapper>
);

export default HeroSection;
