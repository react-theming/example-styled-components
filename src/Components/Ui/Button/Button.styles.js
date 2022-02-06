import styled from "styled-components";

export const StyledButtonWrapper = styled.button`
  padding: 16px 22px;
  cursor: pointer;
  background: ${({ theme }) => theme.palette?.secondary?.light};
  border: 1px solid ${({ theme }) => theme.colors.accent2};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.palette?.secondary.main};
  border-radius: 10px;
`;