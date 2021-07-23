import { issuesReducer } from '.'
import { setPage } from './actions'

const initialOptions = {
  perPage: 10,
  page: 1,
  state: 'open',
}

const initialState = {
  loading: false,
  list: null,
  error: null,
  totalCount: null,
  username: '',
  repo: '',
  page: null,
  options: initialOptions,
  // perPage: 10,
}

describe('Testing issues reducer', () => {
  it('should return default state', () => {
    const reducer = issuesReducer(undefined, { type: 'SOME_TYPE' })
    expect(reducer).toEqual(initialState)
  })

  it('should return page 5', () => {
    const reducer = issuesReducer(undefined, setPage(5))
    expect(reducer).toHaveProperty('page', 5)
  })
})
