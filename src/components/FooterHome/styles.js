import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
