import React from 'react';

import features_img from '@assets/features_img.png';

import {
  Button,
  ButtonText,
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

const FeaturesSection = () => (
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
        <Button>
          <ButtonText>Discover more</ButtonText>
        </Button>
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
        <Button>
          <ButtonText>Learn more</ButtonText>
        </Button>
      </Description>
    </SolutionContainer>
  </Wrapper>
);

export default FeaturesSection;
