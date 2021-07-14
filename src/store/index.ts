import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { issuesReducer } from './issues'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  issues: issuesReducer,
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store
