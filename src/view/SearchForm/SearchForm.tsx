import React, { useState } from 'react'
import './search-form.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultIssuesState } from '../../interfaces/issues'
// import store from '../store'
import {
  setUsername,
  setRepo,
  fetchIssues,
  setOptions,
  fetchCount,
} from '../../store/issues/actions'

const SearchForm: React.FC = () => {
  const issues = useSelector((state: DefaultIssuesState) => state.issues)
  const [userData, setUserData] = useState({
    username: issues.username,
    repo: issues.repo,
  })
  const dispatch = useDispatch()

  const normalizeString = (str: string): string => str.trim().toLowerCase()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData({
      ...userData,
      [e.target.getAttribute('name')!.toString()]: e.target.value,
    })
  }

  const perPageChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(
      setOptions({
        ...issues.options,
        perPage: +e.target.value,
      })
    )
    if (issues.list && issues.list.length) {
      fetchData()
      console.log('perpage changed')
    }
  }

  const userSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    fetchData()
  }

  const fetchData = (): void => {
    const u = normalizeString(userData.username)
    const r = normalizeString(userData.repo)
    dispatch(setUsername(u))
    dispatch(setRepo(r))
    dispatch(fetchIssues())
    dispatch(fetchCount())
  }

  return (
    <div className="search-form">
      <form onSubmit={userSearchSubmit}>
        <div className="col">
          <div className="input-field">
            <label>
              <span>Введите логин пользователя: </span>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={changeHandler}
                disabled={issues.loading}
              />
            </label>
            <button name="confirm-username" type="button">
              Ок
            </button>
          </div>
          <div className="input-field">
            <label>
              <span>Введите название репозитория: </span>
              <input
                type="text"
                name="repo"
                value={userData.repo}
                onChange={changeHandler}
                disabled={issues.loading}
              />
            </label>
            <button name="confirm-repo" type="button">
              Ок
            </button>
          </div>
          <button type="submit" disabled={issues.loading}>
            Поиск
          </button>
        </div>
        <div className="input-field select-field">
          <label>
            <span>Количество отображаемых обращений</span>
            <select
              value={issues.options.perPage}
              onChange={perPageChangeHandler}
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
