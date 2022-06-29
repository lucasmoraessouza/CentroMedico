import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  img {
    width: 145px;
    height: 145px;
    border-radius: 50%;
    background-size: cover;
  }
`;

export const TitleHeader = styled.p`
  font-weight: 700;
  font-size: 24px;
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
    font-size: 23px;
    margin-top: 5px;
    margin-left: 15px;
    line-height: 21px;
    margin-bottom: 0px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
