import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorite';

// * significa generator, lida com assincronismo, yield é semelhante o await
export default function* rootSaga(){
  yield all([
    takeLatest('ADD_FAVORITE_REQUEST', addFavorite),
  ]);
}