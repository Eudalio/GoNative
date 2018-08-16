import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import { addFavoriteSucess, addFavoriteError } from 'store/actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(addFavoriteError('Repositório duplicado'));
    } else {
      yield put(addFavoriteSucess(response.data));
    }
  } catch (err) {
    yield put(addFavoriteError('Repositório não existe'));
  }
}
