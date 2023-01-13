import React from 'react';

import logo_white from '@assets/logo_white.png';
import socials from '@constants/socials';

import { DescriptionAndSocials, Logo, Paragraph, Socials, SocialLink, SocialIcon } from './styled';

const FooterSocials = () => (
  <DescriptionAndSocials>
    <Logo src={logo_white} />
    <Paragraph>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
      commodi.
    </Paragraph>
    <Socials>
      {socials.map((social, index) => (
        <SocialLink key={index} href={social.href} rel="noreferrer" target="_blank">
          <SocialIcon src={social.icon} alt={social.alt} />
        </SocialLink>
      ))}
    </Socials>
  </DescriptionAndSocials>
);

export default FooterSocials;
