export interface IIssueItem {
  title: string
  number: string | number
  createdAt: string
  url: string
}

export interface IIssuesList {
  list: IIssueItem[] | null
  loading: boolean
  error: null | string
  totalCount: null | number
  username: string
  repo: string
  page: null | number | string
  // perPage: number | string
}

export interface DefaultIssuesState {
  issues: IIssuesList
}
