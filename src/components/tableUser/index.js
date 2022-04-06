import { useNavigate } from "react-router-dom";
import { randomUserService } from "../../services";
import { Image, Table, Td, Th, Tr } from "./styled";

export function TableUser({ users }) {

  const navigate = useNavigate();

  const userDetails = (user) => {
    randomUserService.save(user);
    navigate('/details');
  } 

  return(
    <Table> 
      <Tr>
        <Th> Foto </Th>
        <Th> Nome </Th>
        <Th> E-mail </Th>
        <Th> Telefone </Th>
      </Tr>

      { users.map(user => 
          <Tr onClick={() => userDetails(user)}>
          <Td> <Image src={user.picture.thumbnail} /></Td>
            <Td> {`${user.name.first} ${user.name.last}` }  </Td>
            <Td> {user.email} </Td>
            <Td> {user.phone} </Td>
          </Tr>
        )
      }
    </Table>
  );
}
