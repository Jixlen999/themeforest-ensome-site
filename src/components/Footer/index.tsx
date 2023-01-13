import React from 'react';
import FooterCopyright from '@components/FooterCopyright';
import FooterLinks from '@components/FooterLinks';
import FooterSubscribe from '@components/FooterSubscribe';

import { Container, Wrapper } from './styled';

const Footer = () => (
  <Wrapper>
    <FooterSubscribe />
    <Container>
      <FooterLinks />
      <FooterCopyright />
    </Container>
  </Wrapper>
);

export default Footer;
