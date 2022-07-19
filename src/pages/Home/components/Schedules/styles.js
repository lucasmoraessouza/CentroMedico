import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  #mySchedules {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 25px;
    font-weight: 700;
    margin-left: 25px;
    margin-bottom: 35px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #clearBtn{
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 65px;
    height: 50px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
  }

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

export const loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Block = styled.div`
  padding-bottom: 5px;
`;
