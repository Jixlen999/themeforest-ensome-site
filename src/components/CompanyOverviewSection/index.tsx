import React from 'react';

import partners from '@constants/partners';
import successItems from '@constants/successItems';

import {
  CompanySuccess,
  Description,
  Partners,
  SuccessItem,
  Text,
  Title,
  Wrapper,
  Partner,
  Container,
  SuccessNumbers,
  SuccessText,
} from './styled';

const CompanyOverviewSection = () => (
  <Wrapper>
    <Container>
      <Title>We provide services that guarantee your success</Title>
      <Description>
        <CompanySuccess>
          {successItems.map(({ number, text }, index) => (
            <SuccessItem key={index}>
              <SuccessNumbers>{number}</SuccessNumbers>
              <SuccessText>{text}</SuccessText>
            </SuccessItem>
          ))}
        </CompanySuccess>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
        </Text>
      </Description>
      <Partners>
        {partners.map((partner, index) => (
          <Partner key={index} src={partner} alt="Partner Logo" />
        ))}
      </Partners>
    </Container>
  </Wrapper>
);

export default CompanyOverviewSection;
