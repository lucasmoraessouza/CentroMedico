import styled from "styled-components";
import background_login from "../../assets/images/background-image.png";

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  height: 265px;
  background-image: url(${background_login});
  background-size: cover;
`;

export const Content = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  background-color: #fff;
  border-radius: 25px;
  z-index: 2;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 221px;
    height: auto;
  }
`;

export const Form = styled.div`
  padding: 0px 0px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.title_login};
  margin-bottom: 0px;
`;

export const Text = styled.p`
  width: 95%;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text_login};
`;

export const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0px;
    margin-top: 20px;
  }

  label {
    margin-top: 20px;
    margin-bottom: 2px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.text_login};
  }

  #email {
    margin-top: 0px;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 8%;
`;

export const RegisterText = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.text_login};
  }
  #register {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 5px;
  }
`;
