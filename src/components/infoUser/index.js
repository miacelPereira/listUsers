import { Container, Image, Text, Email } from "./styled";

export function InfoUser({ user }) {
  return (
    <Container>
      {user.picture ? 
      <>
        <Image src={user.picture.large} />
        <Text> {`${user.name.first} ${user.name.last}`} </Text>
        <Email> {user.email} </Email>
      </>
      : null }
    </Container>
  );
}
