import React from 'react'
import { useEffect, useState } from 'react'
import { getFullDateString } from '../../domains/shared/utils'
import { IIssueItem } from '../../interfaces/issues'

// interface IssueItemProps {
//   title: string
//   createdAt: string
//   number: number | string
//   url: string
// }

const IssueItem: React.FC<IIssueItem> = ({
  title,
  createdAt,
  number,
  url,
}: IIssueItem) => {
  const [correctDate, setCorrectDate] = useState('')

  useEffect(() => {
    setCorrectDate(getFullDateString(createdAt))
  }, [])

  return (
    <div className="issue-item">
      <div className="issue-item_box">
        <a href={url}>{title}</a>
        <span>Создано: {correctDate}</span>
      </div>
      <div className="issue-item_box">Номер обращения: {number}</div>
    </div>
  )
}

export { IssueItem }
