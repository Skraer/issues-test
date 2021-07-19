import { IIssuesList } from '../../interfaces/issues'
import { ActionType } from '..'
// import { Dispatch } from 'redux'

import { ISSUES } from '../types'

// export type FetchIssuesType = Dispatch

const initialState: IIssuesList = {
  loading: false,
  list: null,
  error: null,
  totalCount: null,
  username: '',
  repo: '',
  page: null,
  // perPage: 10,
}

const issuesReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ISSUES.SET_USERNAME:
      return { ...state, username: action.payload }
    case ISSUES.SET_REPO:
      return { ...state, repo: action.payload }
    case ISSUES.SET_ISSUES:
      return { ...state, list: action.payload }
    case ISSUES.LOADING_START:
      return { ...state, loading: true }
    case ISSUES.LOADING_END:
      return { ...state, loading: false }
    // case ISSUES.SHOW_ERROR:
    //   return { ...state, error: action.payload }
    // case ISSUES.CLEAR_ERROR:
    //   return { ...state, error: null }
    case ISSUES.SET_COUNT:
      return { ...state, totalCount: action.payload }
    case ISSUES.SET_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}

export { issuesReducer }
