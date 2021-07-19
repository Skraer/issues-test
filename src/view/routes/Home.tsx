import React from 'react'
import { IssuesList } from '../Issues/IssuesList'
import SearchForm from '../SearchForm'

const Home: React.FC = () => {
  return (
    <div>
      <SearchForm />
      <IssuesList />
    </div>
  )
}

export { Home }
