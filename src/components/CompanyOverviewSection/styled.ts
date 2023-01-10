import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: ${({ theme }) => theme.width[1110]}px;
  margin: ${({ theme }) => theme.margin[120]}px 0 ${({ theme }) => theme.margin[80]}px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gap[50]}px;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Manrope};
  font-size: ${({ theme }) => theme.fontSize[38]}px;
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[30]}px;
`;

export const CompanySuccess = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[30]}px;
`;

export const SuccessItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gap[10]}px;
  font-family: ${({ theme }) => theme.fontFamily.OpenSans};
`;

export const SuccessNumbers = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight[800]};
  font-size: ${({ theme }) => theme.fontSize[50]}px;
`;
export const SuccessText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[16]}px;
`;

export const Text = styled.div`
  width: ${({ theme }) => theme.width[540]}px;
  font-family: 'Open Sans';
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  font-size: ${({ theme }) => theme.fontSize[20]}px;
  line-height: ${({ theme }) => theme.lineHeight[33]}px;
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Partner = styled.img`
  width: ${({ theme }) => theme.width[185]}px;
  height: ${({ theme }) => theme.width[132]}px;
  object-fit: contain;
`;
