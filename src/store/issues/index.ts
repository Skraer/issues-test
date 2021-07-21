import { IIssuesList } from '../../interfaces/issues'
import { ActionType } from '..'
// import { Dispatch } from 'redux'

import { ISSUES } from '../types'
import { IssuesOptionsType } from '../../interfaces/api'

// export type FetchIssuesType = Dispatch

const initialOptions: IssuesOptionsType = {
  perPage: 10,
  page: 1,
  state: 'open',
}

const initialState: IIssuesList = {
  loading: false,
  list: null,
  error: null,
  totalCount: null,
  username: '',
  repo: '',
  page: null,
  options: initialOptions,
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
    case ISSUES.SET_COUNT:
      return { ...state, totalCount: action.payload }
    case ISSUES.SET_PAGE:
      return { ...state, page: action.payload }
    case ISSUES.SET_OPTIONS:
      return { ...state, options: action.payload }
    default:
      return state
  }
}

export { issuesReducer }
