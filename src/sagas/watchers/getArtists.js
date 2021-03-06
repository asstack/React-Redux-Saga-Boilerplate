import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_ARTISTS_SAGA } from '../../constants';
import { setArtists } from '../../actions';
import { getArtists } from '../../lib/api';

function* workerGetArtistsSaga(action) {
  const artists = yield call(getArtists, action.params);
  yield put(setArtists(artists));
}

export default function* watchGetArtistsSaga() {
  yield takeLatest(GET_ARTISTS_SAGA, workerGetArtistsSaga);
}
