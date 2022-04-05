import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ItemNav, Title } from "./styled";

export function Sidebar() {
  const [currentPage, setCurrentPage] = useState('list');
  const navigate = useNavigate(); 

  useEffect(() => {
    const uri = window.location.href
      .includes('details') ? 'details' : 'list';
    setCurrentPage(uri);
  });

  return (
    <Container>
      <Title> Colab </Title>
      <ItemNav active={currentPage === 'list'} onClick={() => navigate('/') }> Lista </ItemNav>
      <ItemNav active={currentPage === 'details'} onClick={() => navigate('/details')}> Detalhes </ItemNav>
    </Container>
  )
}
