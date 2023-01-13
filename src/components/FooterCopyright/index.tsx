import React from 'react';
import { CopyrightAndPolicy, Copyright, PolicyAndTerms, Policy, Terms } from './styled';

const FooterCopyright = () => (
  <CopyrightAndPolicy>
    <Copyright>Ensome© 2022 All Rights Reserved</Copyright>
    <PolicyAndTerms>
      <Policy>Privacy policy</Policy>
      <Terms>Terms of use</Terms>
    </PolicyAndTerms>
  </CopyrightAndPolicy>
);

export default FooterCopyright;
