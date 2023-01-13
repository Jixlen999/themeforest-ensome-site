import React from 'react';
import { Contacts, LinksTitle, ContactsInfo, ContactsEmail, ContactsPhone, ContactsAddress } from './styled';

const FooterContacts = () => (
  <Contacts>
    <LinksTitle>Cantact info</LinksTitle>
    <ContactsInfo>
      <ContactsEmail>ensome@info.co.us</ContactsEmail>
      <ContactsPhone>+1 601-201-5580</ContactsPhone>
      <ContactsAddress>
        1642 Washington Avenue, Jackson,
        <br /> MS, Mississippi, 39201
      </ContactsAddress>
    </ContactsInfo>
  </Contacts>
);

export default FooterContacts;
