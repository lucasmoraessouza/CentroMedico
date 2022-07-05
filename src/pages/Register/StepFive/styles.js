import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 2%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  padding: 50px 30px 0px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 221px;
    height: auto;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.primary};

  b {
    font-size: 14px;
    font-weight: 900;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Text = styled.p`
  margin-top: 20px;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
`;

export const TextInformation = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.error};
`;

export const Form = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerButton = styled.div`
  margin-top: 10%;
`;

export const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 20px;
    margin-bottom: 2px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.text_login};
  }

  #name {
    margin-top: 0px;
  }
`;

export const BtnBlock = styled.button`
  margin: 15% 0px;
  width: 100%;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme }) => theme.colors.primary};
  padding: 40px 0px;

  span {
    font-size: 18px;
  }
`;

export const Footer = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text_footer};
  position: absolute;
  bottom: 0px;
`;
