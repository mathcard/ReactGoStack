import React from 'react';


import { Container, Title, List, Playlist} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
   
    <List>
      <Playlist to="/playlists/1">
        <img src="https://memorialraulseixas457382085.files.wordpress.com/2018/06/salt.jpg?w=616" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do Rock Mundial!</p>
      </Playlist>
      
      <Playlist to="/playlists/1">
        <img src="https://memorialraulseixas457382085.files.wordpress.com/2018/06/salt.jpg?w=616" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do Rock Mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://memorialraulseixas457382085.files.wordpress.com/2018/06/salt.jpg?w=616" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do Rock Mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://memorialraulseixas457382085.files.wordpress.com/2018/06/salt.jpg?w=616" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do Rock Mundial!</p>
      </Playlist>
    </List>
  </Container>

);

export default Browse;