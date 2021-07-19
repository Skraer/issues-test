import { applyMiddleware, combineReducers, createStore } from 'redux'
import { issuesReducer } from './issues/index'
import createSagaMiddleware from 'redux-saga'
import { all, takeEvery } from 'redux-saga/effects'
import { fetchIssuesCountSaga, fetchIssuesSaga } from './issues/sagas'
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
  yield all([
    takeEvery(ISSUES.FETCH_ISSUES, fetchIssuesSaga),
    takeEvery(ISSUES.FETCH_COUNT, fetchIssuesCountSaga),
  ])
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(sagas)

export default store
