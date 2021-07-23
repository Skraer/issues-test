// import { ApiHandlerType, IssuesOptionsType } from '../interfaces/api'
import fetch from 'node-fetch'
import { IApi, IssuesOptionsType } from '../../interfaces/api'
import { IIssueItem } from '../../interfaces/issues'

// const API = process.env.REACT_APP_API

// type parsedDataItemType = {
//   [key: string]: string | {[key: string]: any}
// }

export class Api implements IApi {
  constructor(private _url: string) {}
  get url(): string {
    return this._url
  }
  fetchIssues = async (
    username: string,
    repo: string,
    options?: IssuesOptionsType
  ) => {
    let urlString: string = `${this.url}/repos/${username}/${repo}/issues`
    if (options) urlString += this.getQueryString(options)
    const response = await fetch(urlString)
    const data = await response.json()

    // console.log(response)

    if (!response.ok) {
      throw new Error(data.message)
    }

    // TODO исправить на вызов метода

    return data.map(
      (item: { [key: string]: any }): IIssueItem => ({
        title: item['title'],
        url: item['html_url'],
        number: item['number'],
        createdAt: item['created_at'],
        body: item['body'],
        user: {
          avatar: item['user']['avatar_url'],
          username: item['user']['login'],
          url: item['user']['html_url'],
        },
      })
    )
  }

  // getFormattedData = (data: []): IIssueItem[] => {
  //   return data.map(
  //     (item: { [key: string]: any }): IIssueItem => ({
  //       title: item['title'],
  //       url: item['html_url'],
  //       number: item['number'],
  //       createdAt: item['created_at'],
  //       body: item['body'],
  //       user: {
  //         avatar: item['user']['avatar_url'],
  //         username: item['user']['login'],
  //         url: item['user']['html_url']
  //       },
  //     })
  //   )
  // }

  getIssuesCount = async (username: string, repo: string, state?: string) => {
    state = state || 'open'
    const response = await fetch(
      `${this.url}/search/issues?q=repo:${username}/${repo}%20is:issue+state:${state}`
    )
    const count = await response.json()
    return count['total_count']
    // return await reponse.json().then((r) => r['total_count'])
  }
  getQueryString = (options: IssuesOptionsType) => {
    let str = '?'
    if (options.perPage) str += `per_page=${options.perPage}&`
    if (options.page) str += `page=${options.page}&`
    if (options.state) str += `state=${options.state}&`
    str = str.slice(0, str.length - 1)
    return str
  }
  // временно не используется
  fromSnakeToCamel = (snake: string): string => {
    const arr = snake.split('_')
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    return arr.join('')
  }
}
