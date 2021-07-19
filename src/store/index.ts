import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { issuesReducer } from './issues/index'
import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'
import { all, takeEvery } from 'redux-saga/effects'
// import { watcherFetchSaga } from './issues/actions'
import { fetchIssuesSaga } from './issues/actions'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ISSUES } from './types'

export type ActionType = {
  type: string
  payload?: any
}

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  issues: issuesReducer,
})

function* sagas() {
  // yield all([watcherFetchSaga])
  yield all([takeEvery(ISSUES.FETCH_ISSUES, fetchIssuesSaga)])
  // yield watcherFetchSaga()
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(sagas)

export default store
