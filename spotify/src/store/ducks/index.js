import { combineReducers } from 'redux';
import error from './error';
import playlists from './playlists';
import playlistsDetails from './playlistDetails';
import player from './player';

export default combineReducers({
  playlists,
  playlistsDetails,
  error,
  player,
});