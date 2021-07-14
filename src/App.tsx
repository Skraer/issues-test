import React from 'react'
import './App.css'
import { useEffect } from 'react'
// import { useState } from 'react';
import SearchForm from './view/SearchForm'
import { IssuesList } from './view/Issues/IssuesList'
import { useSelector } from 'react-redux'
import { DefaultIssuesState } from './interfaces/issues'
import { showDataNotFound } from './domains/errors'
// import Home from './view/home/home';

const App: React.FC = () => {
  const issueError = useSelector(
    (state: DefaultIssuesState) => state.issues.error
  )

  useEffect(() => {
    // if (issueError)
    console.log(issueError)
  }, [issueError])

  return (
    <div className="container">
      <header className="header">header</header>
      <SearchForm />
      <IssuesList />
    </div>
  )
}

export default App
