import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  padding: 0px 25px;
  margin-bottom: 0px;

  color: ${({ theme }) => theme.colors.primary};

  b {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextInformation = styled.p`
  font-weight: 600;
  font-size: 13px;
  padding: 0px 25px;
  margin-top: 0px;
  color: ${({ theme }) => theme.colors.black};
`;

export const TitleBaseboard = styled.p`
  font-weight: 700;
  font-size: 26px;
  padding: 0px 25px;
  margin-bottom: 0px;
  line-height: 21px;
  margin-top: 35px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Bar = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-top: 10px;
  /* margin-bottom: 160px; */
`;

export const ContainerCard = styled.div`
  overflow: overlay;
`;

export const CardLine = styled.div`
  display: flex;
  width: 150%;
  margin-top: 10px;
  margin-left: 20px;
`;

export const CardOption = styled.div`
  width: 250px;
  height: 70px;
  border: solid 3px ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoCard = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  margin-left: 10px;
  font-weight: 600;
`;

export const ContainerBtnWhatsApp = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 30px;
`;
