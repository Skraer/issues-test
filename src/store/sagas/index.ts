import { take, put, takeEvery, takeLatest, call } from 'redux-saga/effects'
import { getQueryString } from '../../domains/issues'
import { IIssueItem } from '../../interfaces/issues'
import { FetchIssuesOptionsType } from '../../interfaces/requests'
import { FETCH_ISSUES, SET_ISSUES } from '../types'

const API_URL_ORIGIN: string = 'https://api.github.com'

export type watcherType = Generator

const fetchIssues = async (
  username: string,
  repo: string,
  options?: FetchIssuesOptionsType
) => {
  let urlString: string = `${API_URL_ORIGIN}/repos/${username}/${repo}/issues`
  if (options) urlString += getQueryString(options)
  const response = await fetch(urlString)
  const data = await response.json()

  const formattedData = data.map((item: { [key: string]: string }) => ({
    title: item['title'],
    url: item['html_url'],
    number: item['number'],
    createdAt: item['created_at'],
  }))
  // console.log(formattedData)
  return formattedData
  // return data
}

// const fetchIssues = async (
//   username: string,
//   repo: string,
//   options?: FetchIssuesOptionsType
// ) => {
//   let urlString: string = `${API_URL_ORIGIN}/repos/${username}/${repo}/issues`
//   if (options) urlString += getQueryString(options)
//   try {
//     // dispatch(clearError())
//     // dispatch(startLoading())
//     // const totalCount = await getIssuesCount(username, repo)
//     // dispatch(setCount(totalCount))

//     const response = await fetch(urlString)
//     const data = await response.json()
//     // if (data && data.message && data.message.toLowerCase() === 'not found') {
//     //   alertHandler.showAlert({
//     //     type: 'error',
//     //     msg: 'Неверный логин и/или репозиторий',
//     //   })
//     // }

//     const formattedData = data.map((item: { [key: string]: string }) => ({
//       title: item['title'],
//       url: item['html_url'],
//       number: item['number'],
//       createdAt: item['created_at'],
//     }))
//     // console.log(formattedData)
//     return formattedData

//     // dispatch({ type: FETCH_ISSUES, payload: formattedData })
//   } catch (e) {
//     console.error(e)
//     // dispatch(showError(e))
//   } finally {
//     // dispatch(endLoading())
//   }
// }

export function* workerSaga(): Generator {
  const data = yield call(fetchIssues, 'nolimits4web', 'swiper')
  yield put({ type: SET_ISSUES, payload: data })
  console.log(data)
}

export function* watchFetchSaga(): watcherType {
  yield takeLatest(FETCH_ISSUES, workerSaga)
  console.log('log after fetching')
}

function* rootSaga() {
  yield watchFetchSaga()
}

export default rootSaga
