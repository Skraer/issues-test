import { take, put, takeEvery, takeLatest, call, all } from 'redux-saga/effects'
import { Api } from '../../domains/api'
import store from '..'
import { /* clearError,  */ endLoading, startLoading } from '../actions'
import { ISSUES } from '../types'

export type watcherType = Generator

const API_URL = process.env.REACT_APP_API || ''

const api = new Api(API_URL)

export function* workerFetchSaga(): Generator {
  const [u, r] = [
    store.getState().issues.username,
    store.getState().issues.repo,
  ]
  try {
    // yield put(clearError())
    yield put(startLoading())

    const list = yield call(api.fetchIssues, u, r)
    yield put({ type: ISSUES.SET_ISSUES, payload: list })
    console.log(list)
  } catch (e) {
    console.error(e)
  } finally {
    yield put(endLoading())
  }
}

export function* watcherFetchSaga(): watcherType {
  yield takeLatest(ISSUES.FETCH_ISSUES, workerFetchSaga)
}

function* rootSaga() {
  yield all([watcherFetchSaga()])
  // yield watcherFetchSaga()
}

export default rootSaga
