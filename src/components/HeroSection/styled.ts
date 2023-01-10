import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  margin-top: ${({ theme }) => theme.margin[75]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  width: ${({ theme }) => theme.width[540]}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[46]}px;
  line-height: ${({ theme }) => theme.lineHeight[60]}px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Text = styled.p`
  width: ${({ theme }) => theme.width[350]}px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: ${({ theme }) => theme.lineHeight[28]}px;
`;

export const ImageContainer = styled.div`
  margin-top: ${({ theme }) => theme.margin[90]}px;
  width: inherit;
  height: ${({ theme }) => theme.height[590]}px;
`;

export const HeroImage = styled.img`
  object-fit: contain;
`;
