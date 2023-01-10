import React from 'react';

import partner1 from '@assets/partner1.png';
import partner2 from '@assets/partner2.png';
import partner3 from '@assets/partner3.png';
import partner4 from '@assets/partner4.png';
import partner5 from '@assets/partner5.png';
import partner6 from '@assets/partner6.png';

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
          <SuccessItem>
            <SuccessNumbers>1830+</SuccessNumbers>
            <SuccessText>Project executed</SuccessText>
          </SuccessItem>
          <SuccessItem>
            <SuccessNumbers>834+</SuccessNumbers>
            <SuccessText>Satisfied customers</SuccessText>
          </SuccessItem>
          <SuccessItem>
            <SuccessNumbers>390</SuccessNumbers>
            <SuccessText>Data management</SuccessText>
          </SuccessItem>
        </CompanySuccess>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
        </Text>
      </Description>
      <Partners>
        <Partner src={partner1} />
        <Partner src={partner2} />
        <Partner src={partner3} />
        <Partner src={partner4} />
        <Partner src={partner5} />
        <Partner src={partner6} />
      </Partners>
    </Container>
  </Wrapper>
);

export default CompanyOverviewSection;
