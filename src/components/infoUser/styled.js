import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 60px;
  border-radius: 50%;
  border: 5px solid #cfcfcf;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 10px;
  font-family: "Ubuntu", sans-serif;
`;

export const Email = styled.p`
  font-size: 14px;
  margin: 0;
  font-family: "Ubuntu", sans-serif;
`;