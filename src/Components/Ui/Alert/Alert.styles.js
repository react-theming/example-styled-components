import styled from 'styled-components';

export const AlertStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 75%;
  padding: 32px 32px 32px 18px;
  border-radius: 90px;
  background: ${({ theme }) => theme.colors.accent4} ;
  margin-bottom: 32px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 16px;
  border: none;
  background: transparent;
`;