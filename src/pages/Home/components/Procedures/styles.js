import styled from "styled-components";

export const Container = styled.div`
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
