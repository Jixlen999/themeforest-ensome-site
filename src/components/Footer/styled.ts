import styled from 'styled-components';

export const Wrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const Container = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;
