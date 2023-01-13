import React from 'react';
import { LinksTitle, QuickLink, QuickLinksGroup, QuickLinksWrapper } from './styled';

export interface IQuickLink {
  linkName: string;
  href: string;
}

export interface IQuickLinksProps {
  links: Array<IQuickLink>;
  title: string;
}

const QuickLinks = ({ links, title }: IQuickLinksProps) => (
  <QuickLinksWrapper>
    <LinksTitle>{title}</LinksTitle>
    <QuickLinksGroup>
      {links.map(({ href, linkName }: any, index) => (
        <QuickLink key={index} href={href}>
          {linkName}
        </QuickLink>
      ))}
    </QuickLinksGroup>
  </QuickLinksWrapper>
);

export default QuickLinks;
