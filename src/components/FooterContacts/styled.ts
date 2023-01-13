import styled from 'styled-components';

export const LinksTitle = styled.h6`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  margin: 0;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap[30]}px;
`;

export const ContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  color: ${({ theme }) => theme.colors.grey};
  * {
    margin: 0;
  }
  gap: ${({ theme }) => theme.gap[12]}px;
`;
export const ContactsEmail = styled.p``;
export const ContactsPhone = styled.p``;
export const ContactsAddress = styled.p``;
