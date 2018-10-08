import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_EXHIBITORS_SAGA } from '../../constants';
import { setExhibitors } from '../../actions';
import { getExhibitors } from '../../lib/api';

function* workerGetExhibitorsSaga() {
  const exhibitors = yield call(getExhibitors);
  yield put(setExhibitors(exhibitors));
}

export default function* watchGetExhibitorsSaga() {
  yield takeLatest(GET_EXHIBITORS_SAGA, workerGetExhibitorsSaga);
}
