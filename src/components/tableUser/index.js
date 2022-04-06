import { Image, Table, Td, Th, Tr } from "./styled";

export function TableUser({ users }) {

  return(
    <Table> 
      <Tr>
        <Th> Foto </Th>
        <Th> Nome </Th>
        <Th> E-mail </Th>
        <Th> Telefone </Th>
      </Tr>

      { users.map(user => 
          <Tr>
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
