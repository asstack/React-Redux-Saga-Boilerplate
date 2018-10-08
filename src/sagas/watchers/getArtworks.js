import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_ARTWORKS_SAGA } from '../../constants';
import { setArtworks } from '../../actions';
import { getArtworks } from '../../lib/api';

function* workerGetArtworksSaga() {
  const artworks = yield call(getArtworks);
  yield put(setArtworks(artworks));
}

export default function* watchGetArtworksSaga() {
  yield takeLatest(GET_ARTWORKS_SAGA, workerGetArtworksSaga);
}
