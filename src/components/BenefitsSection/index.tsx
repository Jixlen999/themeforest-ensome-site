import React from 'react';

import { benefitCardsFirst, benefitCardsSecond } from '@src/constants/benefitsCards';

import {
  Card,
  Cards,
  Description,
  Container,
  FirstColumn,
  SecondColumn,
  Text,
  Title,
  Wrapper,
  CardPicture,
  CardTitle,
  CardText,
} from './styled';

const BenefitsSection = () => (
  <Wrapper>
    <Container>
      <Description>
        <Title>The benefits of Ensome </Title>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Text>
      </Description>
      <Cards>
        <FirstColumn>
          {benefitCardsFirst.map(({ img, title, text }, index) => (
            <Card key={index}>
              <CardPicture src={img} alt="Benefit Image" />
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
            </Card>
          ))}
        </FirstColumn>
        <SecondColumn>
          {benefitCardsSecond.map(({ img, title, text }, index) => (
            <Card key={index}>
              <CardPicture src={img} alt="Benefit Image" />
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
            </Card>
          ))}
        </SecondColumn>
      </Cards>
    </Container>
  </Wrapper>
);

export default BenefitsSection;
