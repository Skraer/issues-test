import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultIssuesState } from '../../interfaces/issues'
import { StatusBar } from '../StatusBar'
import { IssueItem } from './IssueItem'
import { Pagination } from './Pagination'

const IssuesList: React.FC = () => {
  const issues = useSelector((state: DefaultIssuesState) => state.issues)
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(currentPage)
  // }, [currentPage])

  const fetchPage = (page: number): void => {}

  const empty = <p className="text-center">Здесь данных нет :(</p>

  const needPagination =
    issues.list && issues.totalCount && issues.totalCount > 10

  return (
    <div className="container-medium">
      <div className="issue-list">
        {issues.list ? (
          issues.list.map((item) => <IssueItem {...item} key={item.number} />)
        ) : issues.loading ? (
          <p className="text-center">Загрузка...</p>
        ) : (
          empty
        )}
      </div>
      {needPagination && (
        <Pagination
          amountElems={issues.totalCount}
          perPage={10}
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
