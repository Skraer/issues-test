export interface IIssueItem {
  title: string
  number: string | number
  createdAt: string
  url: string
}

export type IssuesListType = {
  list: IIssueItem[]
  loading: boolean
  error: null | string
}

export interface DefaultIssuesState {
  issues: IssuesListType
}
