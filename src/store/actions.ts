import { Dispatch } from 'redux'
// import {
//   CLEAR_ERROR,
//   FETCH_ISSUES,
//   LOADING_END,
//   LOADING_START,
//   SET_COUNT,
//   SET_ISSUES,
//   SET_PAGE,
//   SET_REPO,
//   SET_USERNAME,
//   SHOW_ERROR,
// } from './types'
import { ISSUES } from './types'

import store from '.'
import { IIssuesList } from '../interfaces/issues'

export type FetchIssuesType = Dispatch

export type ActionType = {
  type: string
  payload?: any
}

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

// const showError = (err: string): ActionType => {
//   // return (dispatch: FetchIssuesType) => {
//   //   dispatch<IssuesActionType>({ type: ISSUES.SHOW_ERROR, payload: err })
//   // }
//   return {
//     type: ISSUES.SHOW_ERROR,
//     payload: err,
//   }
// }

// const clearError = (): ActionType => {
//   return {
//     type: ISSUES.CLEAR_ERROR,
//   }
// }

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

const changePage = (page: number) => {
  return (dispatch: Dispatch) => {
    const [u, r] = [
      store.getState().issues.username,
      store.getState().issues.repo,
    ]

    // dispatch({ type: FETCH_ISSUES, payload: {} })
    // dispatch(fetchIssues<IssuesActionType>(u, r, { page: page }))

    dispatch({ type: ISSUES.SET_PAGE, payload: page })
  }
}

export {
  fetchIssues,
  startLoading,
  endLoading,
  setRepo,
  setUsername,
  changePage,
  setIssues,
  // clearError,
}
