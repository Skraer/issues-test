import { ActionType } from '..'
import { IssuesOptionsType } from '../../interfaces/api'
import { IIssuesList } from '../../interfaces/issues'
import { ISSUES } from '../types'

export const setUsername = (username: string): ActionType => {
  return {
    type: ISSUES.SET_USERNAME,
    payload: username,
  }
}

export const setRepo = (repo: string): ActionType => {
  return {
    type: ISSUES.SET_REPO,
    payload: repo,
  }
}

export const startLoading = (): ActionType => {
  return {
    type: ISSUES.LOADING_START,
  }
}

export const endLoading = (): ActionType => {
  return {
    type: ISSUES.LOADING_END,
  }
}

export const setCount = (count: number): ActionType => {
  return {
    type: ISSUES.SET_COUNT,
    payload: count,
  }
}

export const fetchCount = (): ActionType => {
  return {
    type: ISSUES.FETCH_COUNT,
  }
}

export const setPage = (page: number): ActionType => {
  return {
    type: ISSUES.SET_PAGE,
    payload: page,
  }
}

export const fetchIssues = (): ActionType => {
  return {
    type: ISSUES.FETCH_ISSUES,
  }
}

export const setIssues = (list: IIssuesList | null): ActionType => {
  return {
    type: ISSUES.SET_ISSUES,
    payload: list,
  }
}

export const setOptions = (
  options: IssuesOptionsType | null | undefined
): ActionType => {
  return {
    type: ISSUES.SET_OPTIONS,
    payload: options,
  }
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

// export {
//   setUsername,
//   setRepo,
//   startLoading,
//   endLoading,
//   setCount,
//   setPage,
//   fetchIssues,
//   setIssues,
//   setOptions,
//   fetchCount,
//   // watcherFetchSaga,
// }
