import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { issuesReducer } from './issues'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  issues: issuesReducer,
})

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store
