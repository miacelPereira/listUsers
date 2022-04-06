import { useEffect, useState } from "react";
import { Field, InfoUser } from "../../components";
import { Sidebar } from "../../layouts";
import { randomUserService } from "../../services";
import { Container, ContainerDetails, ContainerLabelText, Detail, Header } from "./styled";

export function DetailsUser() {

  const [user, setUser] = useState({});

  useEffect(() => {
    async function handleUser() {
      setUser(await randomUserService.getUser());
    }

    handleUser();
  }, []);

  return(
    <Container>
      <Sidebar />
      <ContainerDetails>
        <Header> Detalhes </Header>
        <Detail>
          <InfoUser user={user} />
          <ContainerLabelText>
            {user.dob ? 
            <>
              <Field label='Idade' value={`${user.dob.age} anos`} />
              <Field label='Login' value={user.login.username} />
              <Field label='Telefone' value={user.phone} />
              <Field label='Celular' value={user.cell} />
              <Field label='Gênero' value={user.gender} />
              <Field label='Pais' value={user.location.country} />
              <Field label='Estado/Distrito' value={user.location.state} />
              <Field label='Cidade' value={user.location.city} />
            </> : null }
          </ContainerLabelText>
        </Detail>
      </ContainerDetails>
    </Container>
  );
}
