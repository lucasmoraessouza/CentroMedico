import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height:100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-size: cover;
  }
`;

export const TitleHeader = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 21px;
  margin: 20px 0px 0px 0px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SubtitleHeader = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-top: 5px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 17px;
  margin-top: 5px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuOptions = styled.div`
  width: 100%;
  height: auto;
`;

export const DivMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px 12px 25px;
  border-bottom: 1px solid #fafafa;
  margin: 0px 0px;

  p {
    font-weight: 500;
    font-size: 18px;
    margin-top: 5px;
    margin-left: 15px;
    line-height: 21px;
    margin-bottom: 0px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterImg = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
  }
`;
