import { IIssueItem } from './issues'

export type IssuesOptionsType = {
  perPage?: number | string
  page?: number | string
  state?: 'open' | 'closed' | 'all'
}

export interface IApi {
  url: string
  fetchIssues<T>(
    username: string,
    repo: string,
    options?: IssuesOptionsType
  ): Promise<T>
  getQueryString(options: IssuesOptionsType): string
  getIssuesCount<T>(username: string, repo: string, state?: string): Promise<T>
  getFormattedData<T extends object>(data: T[]): IIssueItem[]
}
