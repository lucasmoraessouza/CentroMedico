import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 94%;
  background-color: #ffffff;
  box-shadow: 0px 3px 5px 0px #00000045;
  border-radius: 10px;
  margin: 10px 0px;
  margin-left: 3%;
  height: 135px;
`;

export const Date = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: solid #00000014 2px;
  margin: 5px;

  #Day {
    font-weight: 600;
    font-size: 25px;
  }

  #datePlus {
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 16px;
    font-weight: 500;
    color: #de2e2e;
  }

  p {
    font-size: 14px;
    margin: 0px;
  }
`;

export const ContainerInfor = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  color: #00000090;
  width: 250px;
  flex-direction: column;
  justify-content: center;

  #TitleStatus {
    display: flex;
    justify-content: space-between;
    height: 30px;

    span {
      padding: 3px 5px;
      background-color: #2ede6a;
      border-radius: 10px;
      width: 90px;
      color: #fff;
      font-size: 10px;
      display: flex;
      justify-content: center;
      text-transform: capitalize;
    }

    p {
      margin: 0px;
    }
  }

  #TypeCard {
    font-weight: 600;
    font-size: 16px;
    color: #000;
  }

  #ValueCardPlus {
    font-weight: 400;
    font-size: 25px;
    color: #2ede6a;
  }

  #forma {
    width: 200px;
  }
`;

export const SubContainerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerAccordion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 100%;
`;

export const InfoList = styled.div`
  #primaryTitle {
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    margin: 2px;
  }
`;

export const InfMap = styled.div`
  display: flex;
  width: 245px;
  justify-content: space-between;
  padding: 3px 0px;
  color: #08559f;
  font-weight: 600;
  font-size: 10px;
  text-decoration: underline;
  justify-content: flex-end;

  p {
    display: flex;
  }
`;

export const ContainerBtnPrint = styled.div`
margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  height: 30px;
`;

export const BtnPrint = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 10px;
  }
`;
