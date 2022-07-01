import styled from "styled-components";

export const Container = styled.div`
  #mySchedules {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 25px;
    font-weight: 700;
    margin-left: 25px;
  }
`;

export const ContainerInfoImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ItemIconEdit = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -55px;
`;

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionInput = styled.div`
  width: 95%;
  margin-top: 10px;

  label {
    font-size: 18px;
  }
`;

export const BtnBlock = styled.button`
  margin: 20px 0px;
  width: 95%;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme }) => theme.colors.primary};

  span {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const BtnAtt = styled.button`
  margin: 0px 0px 20px 0px;
  width: 95%;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme }) => theme.colors.primary};

  span {
    margin-left: 10px;
    font-size: 18px;
  }
`;
