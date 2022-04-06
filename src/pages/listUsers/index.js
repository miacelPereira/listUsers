import { Container, ContainerList, Header } from "./styled";
import { Sidebar } from "../../layouts"
import { TableUser } from "../../components/tableUser";
import { useEffect, useState } from "react";
import { randomUserService } from "../../services";

export function ListUsers () {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function handleUser() {
      const usersResponse = await randomUserService.getAll();
      setUsers(usersResponse.results);
    }

    handleUser();
  }, []);

  return(
    <Container>
      <Sidebar />
      <ContainerList>
        <Header> Usuários </Header>
        <TableUser users={users}/>
      </ContainerList>
    </Container>
  );
}
