import styled from 'styled-components';

export const DescriptionAndSocials = styled.div`
  width: ${({ theme }) => theme.width[285]}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Logo = styled.img`
  position: relative;
  top: ${({ theme }) => theme.top.xs}px;
`;
export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  color: ${({ theme }) => theme.colors.grey};
  margin: ${({ theme }) => theme.margin[20]}px 0;
`;
export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap[15]}px;
`;

export const SocialIcon = styled.img``;
export const SocialLink = styled.a``;
