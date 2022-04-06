import { Container, ContainerList } from "./styled";
import { Sidebar } from "../../layouts"
import { TableUser } from "../../components/tableUser";
import { useEffect, useState } from "react";
import { randomUserService } from "../../services";
import { HeaderPage } from "../../components";

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
        <HeaderPage page="Usuários" />
        <TableUser users={users}/>
      </ContainerList>
    </Container>
  );
}
