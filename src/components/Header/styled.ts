import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width[1920]}px;
  height: ${({ theme }) => theme.height[126]}px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.height[46]}px;
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.width[141]}px;
  cursor: pointer;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[40]}px;
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.colors.grey};
`;

export const MenuItem = styled.div`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const DemoButton = styled.div`
  width: 168px;
  height: 44px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.button};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
`;

export const DemoIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0;
    width: 24px;
    height: 24px;
  }
`;

export const DemoText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  font-weight: ${({ theme }) => theme.fontWeight[600]};
`;

export const VideoPlayer = styled.div``;
