import React from 'react';

import quickLinks from '@constants/quickLinks';
import serviceLinks from '@constants/serviceLinks';
import QuickLinks from '@components/QuickLinks';
import FooterContacts from '@components/FooterContacts';
import FooterSocials from '@components/FooterSocials';

import { MenuAndSocials, Links } from './styled';

const FooterLinks = () => (
  <MenuAndSocials>
    <FooterSocials />
    <Links>
      <QuickLinks links={quickLinks} title="Quick link" />
      <QuickLinks links={serviceLinks} title="Service" />
      <FooterContacts />
    </Links>
  </MenuAndSocials>
);

export default FooterLinks;
