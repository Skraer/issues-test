import { IssuesListType } from '../interfaces/issues'
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

export type IssuesActionType = {
  type: string
  payload?: any
}

const initialState: IssuesListType = {
  loading: false,
  list: null,
  error: null,
  totalCount: null,
  username: '',
  repo: '',
  page: null,
  // perPage: 10,
}

export const issuesReducer = (
  state = initialState,
  action: IssuesActionType
) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload }
    case SET_REPO:
      return { ...state, repo: action.payload }
    case SET_ISSUES:
      return { ...state, list: action.payload }
    case LOADING_START:
      return { ...state, loading: true }
    case LOADING_END:
      return { ...state, loading: false }
    case SHOW_ERROR:
      return { ...state, error: action.payload }
    case CLEAR_ERROR:
      return { ...state, error: null }
    case SET_COUNT:
      return { ...state, totalCount: action.payload }
    case SET_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
