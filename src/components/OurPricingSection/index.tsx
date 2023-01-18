import React, { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import {
  Wrapper,
  Container,
  Cards,
  ChooseButton,
  Month,
  PeriodControls,
  PlanTitle,
  Price,
  PriceAndPeriod,
  Title,
  Year,
  Card,
  Option,
} from './styled';

const pricePlans = [
  { title: 'Free trial', price: '$00', options: ['For small teams - 5 users', 'Community support'] },
  {
    title: 'Lite',
    price: '$99',
    options: ['For small teams - 15 users', 'Individual support', 'Individual data - 60GB'],
  },
  {
    title: 'Basic',
    price: '$00',
    options: ['For big teams - 30 users', 'Individual support', 'Individual data - 120GB', 'Advanced permissions'],
  },
  {
    title: 'For enterprises',
    price: 'Custom',
    options: [
      'Unlimited team members',
      'Individual support',
      'Unlimited individual data',
      'Advanced permissions',
      'Data history',
      'Audit log',
      'All functions included',
    ],
  },
];

const OurPricingSection = () => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };

  const handleUnhover = () => {
    setHover(false);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Our pricing</Title>
        <Cards>
          {pricePlans.map((plan, index) => (
            <Card onMouseOver={handleHover} onMouseOut={handleUnhover} isHovered={hover}>
              <PlanTitle key={index}>{plan.title}</PlanTitle>
              <PriceAndPeriod>
                <Price>{plan.price}</Price>
                <PeriodControls>
                  <Month>Mo</Month>
                  <Year>Yr</Year>
                </PeriodControls>
              </PriceAndPeriod>
              <ChooseButton>Choose Plan</ChooseButton>
              {plan.options.map((option) => (
                <Option>
                  <BsCheckLg />
                  {option}
                </Option>
              ))}
            </Card>
          ))}
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default OurPricingSection;
