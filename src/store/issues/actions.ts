import { Dispatch } from 'redux'
import { call, put, take, takeEvery } from 'redux-saga/effects'

import store, { ActionType } from '..'
import { Api } from '../../domains/api'
import { IIssuesList } from '../../interfaces/issues'
import { ISSUES } from '../types'

// export type FetchIssuesType = Dispatch

// export type watcherType = Generator

const API_URL = process.env.REACT_APP_API || ''

const api = new Api(API_URL)

const setUsername = (username: string): ActionType => {
  return {
    type: ISSUES.SET_USERNAME,
    payload: username,
  }
}

const setRepo = (repo: string): ActionType => {
  return {
    type: ISSUES.SET_REPO,
    payload: repo,
  }
}

const startLoading = (): ActionType => {
  return {
    type: ISSUES.LOADING_START,
  }
}

const endLoading = (): ActionType => {
  return {
    type: ISSUES.LOADING_END,
  }
}

const setCount = (count: number): ActionType => {
  return {
    type: ISSUES.SET_COUNT,
    payload: count,
  }
}

const setPage = (page: number): ActionType => {
  return {
    type: ISSUES.SET_PAGE,
    payload: page,
  }
}

const fetchIssues = (): ActionType => {
  return {
    type: ISSUES.FETCH_ISSUES,
  }
}

const setIssues = (list: IIssuesList | null): ActionType => {
  return {
    type: ISSUES.SET_ISSUES,
    payload: list,
  }
}

function* fetchIssuesSaga(): Generator {
  console.log(true)

  const [u, r] = [
    store.getState().issues.username,
    store.getState().issues.repo,
  ]

  yield put(startLoading())

  const list = yield call(api.fetchIssues, u, r)
  yield put({ type: ISSUES.SET_ISSUES, payload: list })
  console.log(list)
  yield put(endLoading())
}

// function* watcherFetchSaga(): Generator {
//   yield take('ISSUES/FETCH_ISSUES')
//   yield fetchIssuesSaga()
// }

// const setPage = (page: number) => {
//   return (dispatch: Dispatch) => {
//     const [u, r] = [
//       store.getState().issues.username,
//       store.getState().issues.repo,
//     ]

//     // dispatch({ type: FETCH_ISSUES, payload: {} })
//     // dispatch(fetchIssues<IssuesActionType>(u, r, { page: page }))

//     dispatch({ type: ISSUES.SET_PAGE, payload: page })
//   }
// }

export {
  setUsername,
  setRepo,
  startLoading,
  endLoading,
  setCount,
  setPage,
  fetchIssues,
  setIssues,
  fetchIssuesSaga,
  // watcherFetchSaga,
}
