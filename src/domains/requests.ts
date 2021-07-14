import { FetchIssuesOptionsType } from '../interfaces/requests'

const API_URL: string = 'https://api.github.com'

const fetchUser = async (username: string) => {
  const data: Object = fetch(`${API_URL}/users/${username}`)
    .then((res) => res.json())
    .catch((e) => {
      console.error(e)
    })
  return data
}

const fetchRepo = async (username: string, repo: string) => {
  const data: Object = fetch(`${API_URL}/repos/${username}/${repo}`)
    .then((res) => res.json())
    .catch((e) => {
      console.error(e)
    })
  return data
}

const fetchIssues = async (
  username: string,
  repo: string,
  options?: FetchIssuesOptionsType
) => {
  let urlString: string = `${API_URL}/repos/${username}/${repo}/issues`

  if (options) {
    urlString += '?'
    if (options.perPage) urlString += `per_page=${options.perPage}&`
    if (options.page) urlString += `page=${options.page}&`
    if (options.state) urlString += `state=${options.state}&`
    urlString = urlString.slice(0, urlString.length - 1)
  }

  const data: Object = fetch(`${urlString}`)
    .then((res) => res.json())
    .catch((e) => {
      console.error(e)
    })
  return data
}

export { fetchUser, fetchRepo, fetchIssues }
