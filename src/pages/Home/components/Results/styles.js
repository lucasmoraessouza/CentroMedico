import styled from "styled-components";

export const Container = styled.div`
  #mySchedules {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 25px;
    font-weight: 700;
    margin-left: 25px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
  }
`;
