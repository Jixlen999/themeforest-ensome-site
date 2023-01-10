import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width[1920]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  margin: ${({ theme }) => theme.margin[120]}px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  width: ${({ theme }) => theme.width[540]}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[57]}px;
  line-height: ${({ theme }) => theme.lineHeight[66]}px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextAndButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  width: ${({ theme }) => theme.width[540]}px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[20]}px;
  line-height: ${({ theme }) => theme.lineHeight[33]}px;
  margin-bottom: ${({ theme }) => theme.margin[30]}px;
`;

export const Button = styled.div`
  width: ${({ theme }) => theme.width[185]}px;
  height: ${({ theme }) => theme.height[54]}px;
  border-radius: ${({ theme }) => theme.borderRadius[6]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gap[10]}px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.button};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
`;
export const ButtonText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[24]}px;
`;

export const SolutionContainer = styled.div`
  width: inherit;
  height: ${({ theme }) => theme.height[740]}px;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: ${({ theme }) => theme.gap[46]}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.width[930]}px;
  object-fit: contain;
`;

export const Description = styled.div`
  width: ${({ theme }) => theme.width[540]}px;
`;

export const DescriptionTitle = styled.h2`
  width: ${({ theme }) => theme.width[540]}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[38]}px;
  line-height: ${({ theme }) => theme.lineHeight[56]}px;
`;
