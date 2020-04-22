import React from 'react';
import { Container, NewPlaylist, Nav } from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="http://localhost:3000/">Navegar</a>
        </li>      
        <li>
          <a href="http://localhost:3000/">Rádio</a>
        </li>
      </Nav>


      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="http://localhost:3000/">Seu Daily Mix</a>
        </li>      
        <li>
          <a href="http://localhost:3000/">Tocados recentemente</a>
        </li>      
        <li>
          <a href="http://localhost:3000/">Músicas</a>
        </li>      
        <li>
          <a href="http://localhost:3000/">Álbums</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Artistas</a>
        </li>      
        <li>
          <a href="http://localhost:3000/">Estações</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Arquivos Locais</a>
        </li>      
        <li>
          <a href="http://localhost:3000/">Vídeos</a>
        </li>              
        <li>
          <a href="http://localhost:3000/">Podcast</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="http://localhost:3000/">Melhores do Rock</a>
        </li>      
        <li>
          <a href="http://localhost:3000/">Raul Seixas</a>
        </li>
      </Nav>

    </div>
      <NewPlaylist>
        <img src={AddPlayListIcon} alt="Adicionar playlist"/>
        Nova Playlist
      </NewPlaylist>
  </Container>

);

export default Sidebar;