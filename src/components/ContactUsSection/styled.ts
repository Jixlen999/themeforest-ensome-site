import styled from 'styled-components';

export const Wrapper = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding[100]}px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Container = styled.div`
  width: ${({ theme }) => theme.width[540]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[38]}px;
`;
export const Description = styled.p`
  text-align: center;
  margin: ${({ theme }) => theme.margin[30]}px 0;
  padding: 0 ${({ theme }) => theme.padding[10]}px;
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[28]}px;
  color: ${({ theme }) => theme.colors.grey};
`;
