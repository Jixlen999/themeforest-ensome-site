import React from 'react';
import { useTheme } from 'styled-components';
import { Button } from 'themeforest-lib';

import features_img from '@assets/features_img.png';

import {
  Description,
  DescriptionTitle,
  Image,
  SolutionContainer,
  Text,
  TextAndButton,
  TextContainer,
  Title,
  Wrapper,
} from './styled';

const FeaturesSection = () => {
  const theme = useTheme();
  const count = 0; // fake val for temporary onClick fill
  return (
    <Wrapper>
      <TextContainer>
        <Title>
          The <span>newest</span> business analytics platform
        </Title>
        <TextAndButton>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis etquasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Button text="Discover more" onClick={() => count + 1} />
        </TextAndButton>
      </TextContainer>
      <SolutionContainer>
        <Image src={features_img} />
        <Description>
          <DescriptionTitle>
            Radically new solutions
            <br />
            for data
          </DescriptionTitle>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Button width={theme.width[185]} text="Learn more" onClick={() => count + 1} />
        </Description>
      </SolutionContainer>
    </Wrapper>
  );
};

export default FeaturesSection;
