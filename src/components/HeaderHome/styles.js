import styled from "styled-components";


export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`;