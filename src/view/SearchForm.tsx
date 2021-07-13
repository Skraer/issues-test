import React, { useState } from "react";
import { useEffect } from "react";
import { showDataNotFound } from "../domains/errors";
import { fetchIssues, fetchRepo } from "../domains/requests";
// import { LoadingStatusType } from "../interfaces/SearchForm";
import { StatusBar } from "./StatusBar";

const SearchForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [repo, setRepo] = useState('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [status, setStatus] = useState('');
  const [data, setData] = useState<{[key: string]: any}>({});
  // const [error, setError] = useState('');

  useEffect(() => {
    console.log(data);
  }, [data]);

  const normalizeString = (str: string): string => str.trim().toLowerCase();

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const repoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRepo(e.target.value);
  };

  const handleData = (data: {[key: string]: any}): void => {
    setData(data);
    if (data && data.message && data.message.toLowerCase().match('not found')) {
      showDataNotFound();
      setStatus('error');
    } else {
      setStatus('done');
    }
    setDisabled(false);
  };

  const userSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setDisabled(true);
    setStatus('loading');
    fetchIssues(normalizeString(username), normalizeString(repo), {
      state: 'open',
      perPage: '10'
    })
      .then(res => {
        handleData(res);
      })
  };

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
              disabled={disabled}
            />
          </label>
          <label className="input-field">
            <span>Введите название репозитория: </span>
            <input 
              type="text"
              name="repo"
              value={repo} 
              onChange={repoChangeHandler}
              disabled={disabled}
            />
          </label>
          <button type="submit" disabled={disabled}>Поиск</button>
        </div>
        <StatusBar status={status} />
      </form>
    </div>
  );
}

export default SearchForm;