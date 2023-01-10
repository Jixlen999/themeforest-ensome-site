import styled from 'styled-components';

export const Wrapper = styled.div`
  width: inherit;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.margin[120]}px 0;
`;

export const Container = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: ${({ theme }) => theme.gap[30]}px;
`;

export const Description = styled.div`
  width: ${({ theme }) => theme.width[540]}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap[30]}px;
`;
export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[38]}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[20]}px;
  line-height: ${({ theme }) => theme.lineHeight[33]}px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Cards = styled.div`
  width: ${({ theme }) => theme.width[540]}px;
  height: ${({ theme }) => theme.height[580]}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap[30]}px;
`;
export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: ${({ theme }) => theme.gap[30]}px;
`;
export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: ${({ theme }) => theme.gap[30]}px;
`;
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding[25]}px;
  box-shadow: ${({ theme }) => theme.shadows.card2};
`;
export const CardPicture = styled.img``;

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[20]}px;
`;
export const CardText = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
  color: ${({ theme }) => theme.colors.grey};
`;
