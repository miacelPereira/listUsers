import { Container, Label, Value } from "./styled";

export function Field ({ label, value }) {
  return(
    <Container>
      <Label> {label}: </Label>
      <Value> {value} </Value>
    </Container>
  );
}
