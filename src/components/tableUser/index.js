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

      <Tr>
        <Td> <Image src="https://us.123rf.com/450wm/apoev/apoev1901/apoev190100092/126178797-person-gray-photo-placeholder-woman-in-costume-on-gray-background.jpg" /></Td>
        <Td> Nome </Td>
        <Td> E-mail </Td>
        <Td> Telefone </Td>
      </Tr>
      <Tr>
        <Td> Foto </Td>
        <Td> Nome </Td>
        <Td> E-mail </Td>
        <Td> Telefone </Td>
      </Tr>
      <Tr>
        <Td> Foto </Td>
        <Td> Nome </Td>
        <Td> E-mail </Td>
        <Td> Telefone </Td>
      </Tr>
      <Tr>
        <Td> Foto </Td>
        <Td> Nome </Td>
        <Td> E-mail </Td>
        <Td> Telefone </Td>
      </Tr>
      <Tr>
        <Td> Foto </Td>
        <Td> Nome </Td>
        <Td> E-mail </Td>
        <Td> Telefone </Td>
      </Tr>
      <Tr>
        <Td> Foto </Td>
        <Td> Nome </Td>
        <Td> E-mail </Td>
        <Td> Telefone </Td>
      </Tr>
      <Tr>
        <Td> Foto </Td>
        <Td> Nome </Td>
        <Td> E-mail </Td>
        <Td> Telefone </Td>
      </Tr>
    </Table>
  );
}
