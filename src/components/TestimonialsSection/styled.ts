import styled from 'styled-components';

const Wrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.padding[120]}px 0;
`;

export default Wrapper;
