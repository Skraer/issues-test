import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DefaultIssuesState } from '../../interfaces/issues'
import { IssueItem } from './IssueItem'

const IssuesList: React.FC = () => {
  const list = useSelector((state: DefaultIssuesState) => state.issues.list)

  useEffect(() => {
    console.log(list)

    // if (list.length) {
    //   console.log(true)
    // } else {
    //   console.log(false)
    // }
  }, [list])

  return (
    <div className="issue-list">
      {!!list.length &&
        list.map((item) => <IssueItem {...item} key={item.number} />)}
    </div>
  )
}

export { IssuesList }
