import React from 'react'
import './App.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DefaultIssuesState, IIssueItem } from './interfaces/issues'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import Home from './view/routes/Home'
import IssuePage from './view/routes/IssuePage'

const App: React.FC = () => {
  const issueError = useSelector(
    (state: DefaultIssuesState) => state.issues.error
  )

  useEffect(() => {
    console.log(issueError)
  }, [issueError])

  return (
    <Router>
      <div className="container">
        <header className="header">
          <NavLink to="/" exact>
            Главная
          </NavLink>
          {/* <NavLink to="/details">Детали</NavLink> */}
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details">
            <Route path="/details" />
            <IssuePage></IssuePage>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
