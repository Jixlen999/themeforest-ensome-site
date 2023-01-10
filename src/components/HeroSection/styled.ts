import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  height: 120px;
  margin-top: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: -0.015em;
`;

export const Title = styled.h1`
  width: 540px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[46]}px;
  line-height: 60px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Text = styled.p`
  width: 350px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  line-height: 28px;
`;

export const ImageContainer = styled.div`
  margin-top: 90px;
  width: 1920px;
  height: 590px;
`;

export const HeroImage = styled.img`
  object-fit: contain;
`;
