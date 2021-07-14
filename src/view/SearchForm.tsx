import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showDataNotFound } from '../domains/errors'
import { DefaultIssuesState } from '../interfaces/issues'
// import { fetchIssues, fetchRepo } from '../domains/requests'
import { fetchIssues } from '../store/actions'
// import { LoadingStatusType } from "../interfaces/SearchForm";
import { StatusBar } from './StatusBar'

const SearchForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [repo, setRepo] = useState('')
  const loading = useSelector(
    (state: DefaultIssuesState) => state.issues.loading
  )
  const [data, setData] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(data)
  }, [data])

  const normalizeString = (str: string): string => str.trim().toLowerCase()

  const usernameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUsername(e.target.value)
  }

  const repoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRepo(e.target.value)
  }

  // const handleData = (data: { [key: string]: any }): void => {
  //   setData(data)
  //   if (data && data.message && data.message.toLowerCase().match('not found')) {
  //     showDataNotFound()
  //   }
  //   // setDisabled(false)
  // }

  const userSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(fetchIssues(normalizeString(username), normalizeString(repo)))
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
        <StatusBar />
      </form>
    </div>
  )
}

export default SearchForm
