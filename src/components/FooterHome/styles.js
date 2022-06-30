import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
`;


export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -1px 3px 0px #00000030;

  div {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
    font-weight: 600;
  }

  img {
    color: red
  }
`;

