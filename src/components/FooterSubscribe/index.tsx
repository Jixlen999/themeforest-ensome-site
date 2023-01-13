import React from 'react';
import { EmailField } from 'themeforest-lib';

import { Container, Description, Title, Text, DescriptionAndEmailField, TitleAndText } from './styled';

const FooterSubscribe = () => (
  <DescriptionAndEmailField>
    <Container>
      <Description>
        <TitleAndText>
          <Title>Subscribe to our newsletter</Title>
          <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Text>
        </TitleAndText>
        <EmailField />
      </Description>
    </Container>
  </DescriptionAndEmailField>
);

export default FooterSubscribe;
