import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_NEWS_SAGA } from '../../constants';
import { setNews } from '../../actions';
import { getNews } from '../../lib/api';

function* workerGetNewsSaga(action) {
  const news = yield call(getNews, action.params);
  yield put(setNews(news));
}

export default function* watchGetNewsSaga() {
  yield takeLatest(GET_NEWS_SAGA, workerGetNewsSaga);
}
