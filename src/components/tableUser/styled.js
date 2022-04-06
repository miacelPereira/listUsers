import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  height: 80vh;
  margin: auto;
  border: 1px solid #E7E9EB;
  border-radius: 10px;
  background-color: #FFFFFF;
  
`;

export const Tr = styled.tr`
  width: 100px;
  /* height: 60px; */
  cursor: pointer;
  &:nth-child(even) {
    background-color: #F0F1F2;
  }
`;

export const Th = styled.th`
  padding: 10px;
  height: 50px;
  cursor: auto;
`;

export const Td = styled.td`
  padding: 10px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid #E7E9EB;
`;
