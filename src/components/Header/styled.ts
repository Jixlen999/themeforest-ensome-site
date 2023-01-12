import styled from 'styled-components';

export const Wrapper = styled.div`
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
  margin: 0 ${({ theme }) => theme.margin[145]}px;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
