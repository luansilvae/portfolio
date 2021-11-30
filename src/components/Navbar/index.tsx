import React from 'react';

import Logo from '../../assets/images/logo.svg'

import { Container, Nav, Links } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <img src={Logo} alt="Logo" />
        <Links>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </Links>
      </Nav>
    </Container>

  );
}

export default Navbar;