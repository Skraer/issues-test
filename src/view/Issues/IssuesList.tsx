import React from 'react'
import './issues.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultIssuesState } from '../../interfaces/issues'
import { fetchIssues, setOptions } from '../../store/issues/actions'
import { IssueItem } from './IssueItem'
import { Pagination } from './Pagination'

const IssuesList: React.FC = () => {
  const { list, totalCount, loading, options } = useSelector(
    (state: DefaultIssuesState) => state.issues
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [needPagination, setNeedPagination] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (list?.length) changePage()
  }, [currentPage])

  useEffect(() => {
    if (list && totalCount && totalCount > 10) setNeedPagination(true)
    else setNeedPagination(false)
  }, [totalCount, list])

  const changePage = (): void => {
    dispatch(setOptions({ ...options, page: currentPage }))
    dispatch(fetchIssues())
    console.log(currentPage)
  }

  const emptyComponent = <p className="text-center">Здесь данных нет :(</p>
  const loadingComponent = <p className="text-center">Загрузка...</p>
  const noIssuesComponent = (
    <p className="text-center">У этого репозитория нет ни одного обращения</p>
  )

  return (
    <div className="container-medium">
      <div className="issue-list">
        {loading
          ? loadingComponent
          : !list
          ? emptyComponent
          : list.length
          ? list.map((item) => <IssueItem {...item} key={item.number} />)
          : noIssuesComponent}
      </div>
      {needPagination && (
        <Pagination
          amountElems={totalCount}
          perPage={+options.perPage}
          onChange={(page) => {
            setCurrentPage(page)
          }}
          active={currentPage}
        />
      )}
    </div>
  )
}

export { IssuesList }
