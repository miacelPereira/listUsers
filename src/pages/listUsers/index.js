import { useEffect, useState } from "react";
import { Container, ContainerList } from "./styled";
import { randomUserService } from "../../services";
import { HeaderPage, TableUser } from "../../components";
import { Sidebar } from "../../layouts";

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
