import styled from 'styled-components';

export const QuickLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap[30]}px;
`;
export const QuickLink = styled.a`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  color: ${({ theme }) => theme.colors.grey};
`;
export const QuickLinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap[12]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
`;

export const LinksTitle = styled.h6`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  margin: 0;
`;
