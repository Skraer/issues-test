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
import { alertHandler } from '../modules/alert'
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

// const fetchIssues = (
//   username: string,
//   repo: string,
//   options?: FetchIssuesOptionsType
// ) => {
//   return async (dispatch: FetchIssuesType) => {
//     let urlString: string = `${API_URL}/repos/${username}/${repo}/issues`
//     if (options) urlString += getQueryString(options)
//     try {
//       dispatch(clearError())
//       dispatch(startLoading())
//       const totalCount = await getIssuesCount(username, repo)
//       dispatch(setCount(totalCount))

//       const response = await fetch(urlString)
//       const data = await response.json()
//       if (data && data.message && data.message.toLowerCase() === 'not found') {
//         alertHandler.showAlert({
//           type: 'error',
//           msg: 'Неверный логин и/или репозиторий',
//         })
//       }

//       const formattedData = data.map((item: { [key: string]: string }) => ({
//         title: item['title'],
//         url: item['html_url'],
//         number: item['number'],
//         createdAt: item['created_at'],
//       }))
//       dispatch({ type: FETCH_ISSUES, payload: formattedData })
//     } catch (e) {
//       console.error(e)
//       dispatch(showError(e))
//     } finally {
//       dispatch(endLoading())
//     }
//   }
// }

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
