import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';
import Loading from '../../components/Loading';
import AddPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount(){
    this.props.getPlaylistRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
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
              {this.props.playlists.loading  && <Loading/>}
            </li>
            { this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}            
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlayListIcon} alt="Adicionar playlist" />
        Nova Playlist
      </NewPlaylist>
      </Container>

    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);