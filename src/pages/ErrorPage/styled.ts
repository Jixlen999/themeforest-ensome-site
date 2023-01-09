import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[20]}px;
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
`;
