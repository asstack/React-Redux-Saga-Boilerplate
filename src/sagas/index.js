import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsers';
import watchGetNewsSaga from './watchers/getNews';
import watchGetEventsSaga from './watchers/getEvents';
import watchGetExhibitorsSaga from './watchers/getExhibitors';
import watchGetArtistsSaga from './watchers/getArtists';
import watchGetArtworksSaga from './watchers/getArtworks';

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetNewsSaga),
    fork(watchGetEventsSaga),
    fork(watchGetExhibitorsSaga),
    fork(watchGetArtistsSaga),
    fork(watchGetArtworksSaga)
  ]);
}
