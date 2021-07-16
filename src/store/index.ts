import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { issuesReducer } from './issues'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { all } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  issues: issuesReducer,
})

function* sagas() {
  yield all([])
}

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store
