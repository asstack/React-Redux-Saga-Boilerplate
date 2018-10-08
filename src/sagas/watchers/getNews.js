import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_NEWS_SAGA } from '../../constants';
import { setNews } from '../../actions';
import { getNews } from '../../lib/api';

function* workerGetNewsSaga() {
  const news = yield call(getNews);
  yield put(setNews(news));
}

export default function* watchGetNewsSaga() {
  yield takeLatest(GET_NEWS_SAGA, workerGetNewsSaga);
}
