import { FetchIssuesOptionsType } from '../interfaces/requests'
import { Dispatch } from 'redux'
import {
  CLEAR_ERROR,
  FETCH_ISSUES,
  LOADING_END,
  LOADING_START,
  SHOW_ERROR,
} from './types'
import { IssuesActionType } from './issues'
import { getQueryString } from '../domains/issues'
import { showDataNotFound } from '../domains/errors'

const API_URL: string = 'https://api.github.com'

export type FetchIssuesType = Dispatch

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

const fetchIssues = (
  username: string,
  repo: string,
  options?: FetchIssuesOptionsType
) => {
  return async (dispatch: FetchIssuesType) => {
    let urlString: string = `${API_URL}/repos/${username}/${repo}/issues`
    if (options) urlString += getQueryString(options)
    try {
      dispatch(clearError())
      dispatch(startLoading())
      const response = await fetch(urlString)
      const data = await response.json()
      if (data && data.message && data.message.toLowerCase() === 'not found') {
        showDataNotFound()
      }
      const formattedData = data.map((item: { [key: string]: string }) => ({
        title: item['title'],
        url: item['html_url'],
        number: item['number'],
        createdAt: item['created_at'],
      }))
      dispatch({ type: FETCH_ISSUES, payload: formattedData })
    } catch (e) {
      console.error(e)
      dispatch(showError(e))
    } finally {
      dispatch(endLoading())
    }
  }
}

export { fetchIssues, startLoading, endLoading }
