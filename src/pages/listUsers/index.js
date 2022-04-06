import { Container, ContainerList, Header } from "./styled";
import { Sidebar } from "../../layouts"
import { TableUser } from "../../components/tableUser";

export function ListUsers () {
  return(
    <Container>
      <Sidebar />
      <ContainerList>
        <Header> Usuários </Header>
        <TableUser />
      </ContainerList>
    </Container>
  );
}
