import React from 'react';
import { Button } from 'themeforest-lib';
import { Wrapper, Title, Description, Container } from './styled';

const ContactUsSection = () => {
  const handleClick = () => {};

  return (
    <Wrapper>
      <Container>
        <Title>Do you need help?</Title>
        <Description>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi.
        </Description>
        <Button text="Contact Us" width={190} height={54} onClick={handleClick} />
      </Container>
    </Wrapper>
  );
};

export default ContactUsSection;
