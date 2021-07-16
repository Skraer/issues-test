import { take, put, takeEvery, takeLatest, call, all } from 'redux-saga/effects'
import { Api } from '../../domains/api'
import store from '..'
// import { getQueryString } from '../../domains/issues'
// import { IIssueItem } from '../../interfaces/issues'
// import { FetchIssuesOptionsType } from '../../interfaces/requests'
import { clearError, endLoading, setIssues, startLoading } from '../actions'
import { FETCH_ISSUES, SET_ISSUES } from '../types'

export type watcherType = Generator

// const fetchIssues = async (
//   username: string,
//   repo: string,
//   options?: FetchIssuesOptionsType
// ) => {
//   let urlString: string = `${API}/repos/${username}/${repo}/issues`
//   if (options) urlString += getQueryString(options)
//   const response = await fetch(urlString)
//   const data = await response.json()

//   return data.map(
//     (item: { [key: string]: string }): IIssueItem => ({
//       title: item['title'],
//       url: item['html_url'],
//       number: item['number'],
//       createdAt: item['created_at'],
//     })
//   )
// }
const API = process.env.REACT_APP_API || ''

const api = new Api(API)

export function* workerFetchSaga(): Generator {
  const [u, r] = [
    store.getState().issues.username,
    store.getState().issues.repo,
  ]
  try {
    yield put(clearError())
    yield put(startLoading())

    const list = yield call(api.fetchIssues, u, r)
    yield put({ type: SET_ISSUES, payload: list })
    console.log(list)
  } catch (e) {
    console.error(e)
  } finally {
    yield put(endLoading())
  }
}

export function* watcherFetchSaga(): watcherType {
  yield takeLatest(FETCH_ISSUES, workerFetchSaga)
}

function* rootSaga() {
  yield all([watcherFetchSaga()])
  // yield watcherFetchSaga()
}

export default rootSaga
