import { IssuesOptionsType } from './api'

export interface IIssueItem {
  title: string
  number: string | number
  createdAt: string
  url: string
  body: string
  user: { avatar: string; username: string }
  // avatarUrl: string
}

export interface IIssuesList {
  list: IIssueItem[] | null
  loading: boolean
  error: null | string
  totalCount: null | number
  username: string
  repo: string
  page: null | number | string
  options: IssuesOptionsType
  // perPage: number | string
}

export interface DefaultIssuesState {
  issues: IIssuesList
}
