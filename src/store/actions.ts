// import { FetchIssuesOptionsType } from '../interfaces/requests'
// import { IssuesOptionsType } from '../interfaces/api'
import { Dispatch } from 'redux'
import {
  CLEAR_ERROR,
  FETCH_ISSUES,
  LOADING_END,
  LOADING_START,
  SET_COUNT,
  SET_ISSUES,
  SET_PAGE,
  SET_REPO,
  SET_USERNAME,
  SHOW_ERROR,
} from './types'
import { IssuesActionType } from './issues'
// import { getIssuesCount, getQueryString } from '../domains/issues'
// import { showDataNotFound } from '../domains/alert'
// import { alertHandler } from '../modules/alert'
import store from '.'
import { IssuesListType } from '../interfaces/issues'

export type FetchIssuesType = Dispatch

const setUsername = (username: string): IssuesActionType => {
  return {
    type: SET_USERNAME,
    payload: username,
  }
}

const setRepo = (repo: string): IssuesActionType => {
  return {
    type: SET_REPO,
    payload: repo,
  }
}

const startLoading = (): IssuesActionType => {
  return {
    type: LOADING_START,
  }
}

const endLoading = (): IssuesActionType => {
  return {
    type: LOADING_END,
  }
}

const showError = (err: string): IssuesActionType => {
  // return (dispatch: FetchIssuesType) => {
  //   dispatch<IssuesActionType>({ type: SHOW_ERROR, payload: err })
  // }
  return {
    type: SHOW_ERROR,
    payload: err,
  }
}

const clearError = (): IssuesActionType => {
  return {
    type: CLEAR_ERROR,
  }
}

const setCount = (count: number): IssuesActionType => {
  return {
    type: SET_COUNT,
    payload: count,
  }
}

const setPage = (page: number): IssuesActionType => {
  return {
    type: SET_PAGE,
    payload: page,
  }
}

const fetchIssues = (): IssuesActionType => {
  return {
    type: FETCH_ISSUES,
  }
}

const setIssues = (list: IssuesListType | null): IssuesActionType => {
  return {
    type: SET_ISSUES,
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

    dispatch({ type: SET_PAGE, payload: page })
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
  clearError,
}
