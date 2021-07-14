import { IIssueItem } from '../interfaces/issues'
import { FetchIssuesOptionsType } from '../interfaces/requests'

export const getQueryString = (options: FetchIssuesOptionsType): string => {
  let str = '?'
  if (options.perPage) str += `per_page=${options.perPage}&`
  if (options.page) str += `page=${options.page}&`
  if (options.state) str += `state=${options.state}&`
  str = str.slice(0, str.length - 1)
  return str
}

// export const parseDataToObj = (data: []): IIssueItem => {

// }
