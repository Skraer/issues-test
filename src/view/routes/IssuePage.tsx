import React from 'react'
import './issue-page.css'
import { DefaultIssuesState, IIssueItem } from '../../interfaces/issues'
// import { match } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getFullDateString } from '../../modules/dates'

const IssuePage: React.FC = () => {
  const history = useHistory()
  const num = history.location.hash.slice(1)
  const issues = useSelector((state: DefaultIssuesState) => state.issues)
  const issueItem = issues.list?.filter(
    (item: IIssueItem) => item.number.toString() === num
  )[0]
  console.log(num)

  console.log(issueItem)

  return (
    <div className="issue-page">
      <p>Детальная информация по обращению номер: {issueItem?.number}</p>
      <p>Заголовок: {issueItem?.title}</p>
      <p>Автор: {issueItem?.user.username}</p>
      <p>
        Ссылка:{' '}
        <a href={issueItem?.url} target="_blank">
          {issueItem?.url}
        </a>
      </p>
      <p>Нераспарсенный текст: {issueItem?.body}</p>
      <p>Создано: {getFullDateString(issueItem!.createdAt)}</p>
    </div>
  )
}

export { IssuePage }
