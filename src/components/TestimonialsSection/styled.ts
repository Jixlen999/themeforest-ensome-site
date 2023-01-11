import styled from 'styled-components';

export const Wrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
`;
export const Container = styled.div`
  width: 1110px;
`;
export const TitleAndControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
`;
export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  gap: 15px;
`;

export const ControlButton = styled.div`
  width: 110px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 20px;
  i {
    width: 1000px;
  }
`;
export const Card = styled.div``;
