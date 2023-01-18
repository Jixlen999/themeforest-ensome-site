import styled from 'styled-components';

export const Wrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 800;
  font-size: 38px;
`;

export const PlanTitle = styled.h6`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const PriceAndPeriod = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Cards = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
`;
export const Card = styled.div<{ isHovered: boolean }>`
  width: 255px;
  height: 525px;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  box-shadow: ${({ theme }) => theme.shadows.card3};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Price = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 40px;
`;
export const PeriodControls = styled.div`
  display: flex;
  gap: 10px;
`;
export const Month = styled.div`
  width: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;
export const Year = styled.div`
  width: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;
export const ChooseButton = styled.div`
  width: 215px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
export const Option = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
