import { IssuesListType } from '../interfaces/issues'
import {
  CLEAR_ERROR,
  FETCH_ISSUES,
  LOADING_END,
  LOADING_START,
  SHOW_ERROR,
} from './types'

export type IssuesActionType = {
  type: string
  payload?: any
}

const initialState: IssuesListType = {
  loading: false,
  list: [],
  error: null,
}

export const issuesReducer = (
  state = initialState,
  action: IssuesActionType
) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return { ...state, list: action.payload }
    case LOADING_START:
      return { ...state, loading: true }
    case LOADING_END:
      return { ...state, loading: false }
    case SHOW_ERROR:
      return { ...state, error: action.payload }
    case CLEAR_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}
