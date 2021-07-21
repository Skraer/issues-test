import { call, put, select } from 'redux-saga/effects'
import store from '..'
import { Api } from '../../domains/api'
import { ISSUES } from '../types'
import { endLoading, startLoading } from './actions'

const API_URL = process?.env?.REACT_APP_API || 'https://api.github.com'
// const API_URL = 'https://api.github.com'

const api = new Api(API_URL)

function* fetchIssuesSaga(): Generator {
  const [u, r, ops] = [
    store.getState().issues.username,
    store.getState().issues.repo,
    store.getState().issues.options,
  ]

  yield put(startLoading())
  try {
    const list = yield call(api.fetchIssues, u, r, ops)
    yield put({ type: ISSUES.SET_ISSUES, payload: list })
  } catch (e) {
    console.error(e)
    console.log('error')
  } finally {
    yield put(endLoading())
  }
}

function* fetchIssuesCountSaga(): Generator {
  const [u, r, ops] = [
    store.getState().issues.username,
    store.getState().issues.repo,
    store.getState().issues.options,
  ]
  try {
    const count = yield call(api.getIssuesCount, u, r, ops.state)
    yield put({ type: ISSUES.SET_COUNT, payload: count })
    console.log(count)
  } catch (e) {
    console.error(e)
  }
}

export { fetchIssuesSaga, fetchIssuesCountSaga }
