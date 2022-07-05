import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 2%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  height: 98%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin: 50px 30px 0px 30px;
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

export const Text = styled.p`
  margin-top: 35px;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
`;

export const TextInformation = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
`;

export const Form = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export const ContainerButton = styled.div`
  margin-top: 20%;
`;

export const Footer = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text_footer};
  position: absolute;
  bottom: 0px;
`;
