import { IssuesOptionsType } from './api'

export interface IIssueUser {
  avatar: string
  username: string
  url: string
}

export interface IIssueItem {
  title: string
  number: string | number
  createdAt: string
  url: string
  body: string
  user: IIssueUser
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
