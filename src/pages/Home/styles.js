import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 65px;
  padding-left: 20px;
  padding-right: 20px;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Bar = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #000;
  margin-top: 10px;
  margin-bottom: 160px;
`;
