import React from 'react';

import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
    <img src="https://memorialraulseixas457382085.files.wordpress.com/2018/06/salt.jpg?w=616" alt="Playlist" />
    <div>
      <span>PLAYLIST</span>
      <h1>Rock Raiz</h1>
      <p>13 músicas</p>
      <button>PLAY</button>
    </div>
    </Header>

    <SongList cellPading={0} cellSpacing={0}>
      <thead>
          <th/>
          <th>Titulo</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th><img src={ClockIcon} alt="Duração"/></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Sociedade Alterativa</td>
          <td>Raul Seixas</td>
          <td>Gitã</td>
          <td>2:55</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Sociedade Alterativa</td>
          <td>Raul Seixas</td>
          <td>Gitã</td>
          <td>2:55</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Sociedade Alterativa</td>
          <td>Raul Seixas</td>
          <td>Gitã</td>
          <td>2:55</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Sociedade Alterativa</td>
          <td>Raul Seixas</td>
          <td>Gitã</td>
          <td>2:55</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Sociedade Alterativa</td>
          <td>Raul Seixas</td>
          <td>Gitã</td>
          <td>2:55</td>
        </tr>

        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Sociedade Alterativa</td>
          <td>Raul Seixas</td>
          <td>Gitã</td>
          <td>2:55</td>
        </tr>
      </tbody>
    </SongList>
  </Container>

);

export default Playlist;