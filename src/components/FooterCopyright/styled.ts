import styled from 'styled-components';

export const CopyrightAndPolicy = styled.div`
  padding: ${({ theme }) => theme.padding[30]}px 0;
  color: ${({ theme }) => theme.colors.helperBlue2};
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  border-top: ${({ theme }) => theme.border[1]}px solid ${({ theme }) => theme.colors.helperBlue2};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p``;
export const PolicyAndTerms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[95]}px;
`;
export const Policy = styled.p``;
export const Terms = styled.p``;
