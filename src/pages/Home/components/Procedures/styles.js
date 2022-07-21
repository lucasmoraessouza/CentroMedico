import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  #mySchedules {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 25px;
    font-weight: 700;
    margin-left: 25px;
  }
`;

export const ContainerSearch = styled.div`
  margin-right: 17px;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
`;

export const CardPrint = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  margin: 0px;
  border: solid 1px #f3f2f7;
  border-radius: 10px;
  height: 50px;
  margin-bottom: 10px;

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const IconX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const BtnPrint = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: #f5f5f5c4;
  }
`;
