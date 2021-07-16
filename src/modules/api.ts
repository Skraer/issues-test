import { Api } from '../domains/api'
import { IssuesOptionsType } from '../interfaces/api'
import { IIssueItem } from '../interfaces/issues'

// const API: string = process.env.REACT_APP_API

const getQueryString = (options: IssuesOptionsType): string => {
  let str = '?'
  if (options.perPage) str += `per_page=${options.perPage}&`
  if (options.page) str += `page=${options.page}&`
  if (options.state) str += `state=${options.state}&`
  str = str.slice(0, str.length - 1)
  return str
}

// const getIssuesCount = async (
//   username: string,
//   repo: string,
//   state?: string = 'open'
// ) => {
//   const reponse = await fetch(
//     `${API}/search/issues?q=repo:${username}/${repo}%20is:issue+state:${state}`
//   )
//   return await reponse.json().then((r) => r['total_count'])
// }

// const fetchIssues = (
//   username: string,
//   repo: string,
//   options?: IssuesOptionsType
// ) => {
//   let urlString: string = `${API}/repos/${username}/${repo}/issues`
//   if (options) urlString += getQueryString(options)
//   const response = await fetch(urlString)
//   const data = await response.json()

//   return data.map(
//     (item: { [key: string]: string }): IIssueItem => ({
//       title: item['title'],
//       url: item['html_url'],
//       number: item['number'],
//       createdAt: item['created_at'],
//     })
//   )
// }

// export { api }
