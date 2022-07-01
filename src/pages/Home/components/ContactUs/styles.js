import styled from "styled-components";

export const Container = styled.div`
  #mySchedules {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 25px;
    font-weight: 700;
    margin-left: 25px;
  }
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

export const ContainerBtnPrint = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: center;
  width: 95%;
  flex-direction: column;
  #phoneLabel {
    margin-top: 20px;
  }
`;

export const BtnPrint = styled.button`
  width: 130px;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const ContainerBtnWhatsApp = styled.div`
  margin: 50px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
