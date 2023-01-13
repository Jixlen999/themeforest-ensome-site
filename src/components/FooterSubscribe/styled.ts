import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleAndText = styled.div`
  width: ${({ theme }) => theme.width[540]}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap[25]}px;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[38]}px;
`;
export const Text = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[20]}px;
  line-height: ${({ theme }) => theme.lineHeight[33]}px;
`;

export const DescriptionAndEmailField = styled.div`
  width: inherit;
  border-bottom: ${({ theme }) => theme.border[1]}px solid ${({ theme }) => theme.colors.helperBlue2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding[80]}px 0;
`;
