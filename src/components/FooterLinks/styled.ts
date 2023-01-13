import styled from 'styled-components';

export const MenuAndSocials = styled.div`
  width: inherit;
  padding: ${({ theme }) => theme.padding[50]}px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Links = styled.div`
  width: ${({ theme }) => theme.width[615]}px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
