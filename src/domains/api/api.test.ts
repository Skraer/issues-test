/**
 * @jest-environment jsdom
 */

// jest.mock('node-fetch')
// import fetch from 'node-fetch'
// const { Response } = jest.requireActual('node-fetch')
// const mockedFetch = fetch as jest.Mocked<typeof fetch>

import { IssuesOptionsType } from '../../interfaces/api'
import { IIssueItem } from '../../interfaces/issues'
import { Api } from './api'

const testApi = new Api('https://api.github.com')

const fakeReceived = [
  {
    title: 'Some awesome title',
    html_url: 'https://some-issue-url.com',
    number: '1331',
    created_at: '2021-05-22T11:11:19.484Z',
    body: 'some body text',
    user: {
      avatar_url: 'https://some-issue-url-avatar.com',
      login: 'Skraer',
      html_url: 'https://some-issue-url-user.com',
    },
  },
  {
    title: 'Some awesome title',
    html_url: 'https://some-issue-url.com',
    number: '1332',
    created_at: '2021-06-22T11:11:19.484Z',
    body: 'some body text',
    user: {
      avatar_url: 'https://some-issue-url-avatar.com',
      login: 'Skraer',
      html_url: 'https://some-issue-url-user.com',
    },
  },
  {
    title: 'Some awesome title',
    html_url: 'https://some-issue-url.com',
    number: '1333',
    created_at: '2021-07-22T11:11:19.484Z',
    body: 'some body text',
    user: {
      avatar_url: 'https://some-issue-url-avatar.com',
      login: 'Skraer',
      html_url: 'https://some-issue-url-user.com',
    },
  },
]

const fakeReceivedJson = JSON.stringify(fakeReceived)
const fakeReceivedParsed = fakeReceived.map((item): IIssueItem => {
  return {
    body: item.body,
    number: item.number,
    title: item.title,
    createdAt: item.created_at,
    url: item.html_url,
    user: {
      avatar: item.user.avatar_url,
      url: item.user.html_url,
      username: item.user.login,
    },
  }
})

testApi.fetchIssues = jest.fn().mockImplementation(testApi.fetchIssues)
testApi.getIssuesCount = jest.fn().mockImplementation(testApi.getIssuesCount)

type ParamType = {
  u: string
  r: string
  ops: IssuesOptionsType
}
const p: ParamType = {
  u: 'nolimits4web',
  r: 'swiper',
  ops: {
    page: 1,
    perPage: 10,
    state: 'open',
  },
}

describe('Testing api methods', () => {
  it('should return camelcase string', () => {
    expect(testApi.fromSnakeToCamel('test_snake_string')).toBe(
      'testSnakeString'
    )
    expect(testApi.fromSnakeToCamel('test_sNAke_STRing')).toBe(
      'testSnakeString'
    )
    expect(testApi.fromSnakeToCamel('q_w_w_w_w_w')).toBe('qWWWWW')
    expect(testApi.fromSnakeToCamel('q_W_w_W_W_w')).toBe('qWWWWW')
  })

  it('should fetching data correctly', async () => {
    expect(testApi.fetchIssues).toHaveBeenCalledTimes(0)
    const data = await testApi.fetchIssues(p.u, p.r, p.ops)
    expect(data).toBeInstanceOf(Array)
    await testApi.fetchIssues(p.u, p.r, p.ops)
    await testApi.fetchIssues(p.u, p.r, p.ops)
    expect(testApi.fetchIssues).toHaveBeenCalledTimes(3)
  })

  it('should return number in string type', async () => {
    expect(testApi.getIssuesCount).toHaveBeenCalledTimes(0)
    const count = await testApi.getIssuesCount(p.u, p.r, 'open')
    expect(testApi.getIssuesCount).toBeCalledTimes(1)
    expect(typeof count).toBe('number')
    expect(+count).not.toBeNaN()
  })
})
