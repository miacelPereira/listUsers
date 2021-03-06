import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #E7E9EB;
`;

export const ContainerDetails = styled.div`
  width: calc(100% + 15px);
  height: 100vh;
  border-radius: 15px;
  position: relative;
  left: -15px;
  background-color: #E7E9EB;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const ContainerLabelText = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

