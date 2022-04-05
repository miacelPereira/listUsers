import styled from "styled-components";

export const Container = styled.nav`
  width: 250px;
  height: 100vh;
  padding: 15px 0;
  background-image: linear-gradient(to bottom, #0F131B, #3B4F6F);
  transition: 0.3s;
`;

export const Title = styled.h1`
  width: 100%;
  color: #FFFFFF;
  font-family: 'Ubuntu', sans-serif;
  margin: 0 0 30px 15px;
  padding: 0;
`;

export const ItemNav = styled.h2`
  height: 40px;
  margin: 0 0 10px 0;
  padding: 0;
  color: #FFFFFF;
  font-size: 15px;
  line-height: 40px;
  padding-left: 15px;
  cursor: pointer;
${props => props.active ? 
    `background-image: linear-gradient(to left, #151b26, #27354a);
     border-left: 5px solid #811AC0;
     padding-left: 10px;
    ` 
  : null }
`;
