import { all } from 'redux-saga/effects';
import { sagas as appSagas } from '../App';

export default function* rootSaga() {
  yield all([
    ...appSagas,
  ]);
}
