import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  justify-content: flex-start;
`;

export const loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;