import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultIssuesState } from '../interfaces/issues'
import {
  // fetchIssues,
  setUsername as setUsernameAction,
  setRepo as setRepoAction,
  fetchIssues,
} from '../store/actions'
import { ISSUES } from '../store/types'

const SearchForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [repo, setRepo] = useState('')
  const [perPage, setPerPage] = useState(10)

  const loading = useSelector(
    (state: DefaultIssuesState) => state.issues.loading
  )

  const dispatch = useDispatch()

  const normalizeString = (str: string): string => str.trim().toLowerCase()

  const usernameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUsername(e.target.value)
  }

  const repoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRepo(e.target.value)
  }

  const userSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const u = normalizeString(username)
    const r = normalizeString(repo)
    dispatch(setUsernameAction(u))
    dispatch(setRepoAction(r))
    dispatch(fetchIssues())
    // dispatch({
    //   type: ISSUES.FETCH_ISSUES,
    //   payload: {
    //     username: u,
    //     repo: r,
    //     options: {
    //       perPage,
    //     },
    //   },
    // })
    // dispatch(fetchIssues(u, r, { perPage }))
  }

  return (
    <div className="search-form">
      <form onSubmit={userSearchSubmit}>
        <div className="col">
          <label className="input-field">
            <span>Введите логин пользователя: </span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={usernameChangeHandler}
              disabled={loading}
            />
          </label>
          <label className="input-field">
            <span>Введите название репозитория: </span>
            <input
              type="text"
              name="repo"
              value={repo}
              onChange={repoChangeHandler}
              disabled={loading}
            />
          </label>
          <button type="submit" disabled={loading}>
            Поиск
          </button>
        </div>
        <div className="input-field select-field">
          <label>
            <span>Количество отображаемых обращений</span>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(+e.target.value)
              }}
            >
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
        {/* <StatusBar /> */}
      </form>
    </div>
  )
}

export default SearchForm
