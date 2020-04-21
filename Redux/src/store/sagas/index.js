import { all, takeLatest } from 'redux-saga/effects';
import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorite';

// * significa generator, lida com assincronismo, yield é semelhante o await
export default function* rootSaga(){
  yield all([
    takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite),
  ]);
}