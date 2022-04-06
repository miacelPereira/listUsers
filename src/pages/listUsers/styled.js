import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #E7E9EB;
`;

export const ContainerList = styled.div`
  width: calc(100% + 15px);
  height: 100vh;
  border-radius: 15px;
  position: relative;
  left: -15px;
  background-color: #E7E9EB;
`;

export const Header = styled.h1`
  height: 60px;
  padding-left: 15px;
  margin-top: 15px;
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
  line-height: 60px;
`;