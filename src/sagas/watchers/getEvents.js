import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_EVENTS_SAGA } from '../../constants';
import { setEvents } from '../../actions';
import { getEvents } from '../../lib/api';

function* workerGetEventsSaga(action) {
  const events = yield call(getEvents, action.params);
  yield put(setEvents(events));
}

export default function* watchGetEventsSaga() {
  yield takeLatest(GET_EVENTS_SAGA, workerGetEventsSaga);
}
