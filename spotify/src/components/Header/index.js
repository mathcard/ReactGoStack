import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/28113945?v=4" alt="Avatar" />
      Matheus do Carmo
    </User>
  </Container>
);

export default Header;

