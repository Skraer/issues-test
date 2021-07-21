import React from 'react'
// import { useEffect, useState } from 'react'
import { getFullDateString } from '../../modules/dates'
import { IIssueItem } from '../../interfaces/issues'
import { NavLink } from 'react-router-dom'

const IssueItem: React.FC<IIssueItem> = ({
  title,
  createdAt,
  number,
  url,
  user,
}: IIssueItem) => {
  const correctDate = getFullDateString(createdAt)

  return (
    <div className="issue-item">
      <div className="issue-item_main">
        <div className="issue-item_user">
          <div className="issue-item_user-avatar">
            <img src={user.avatar} alt="" />
          </div>
          <a className="issue-item_user-link" href={user.url}>
            {user.username}
          </a>
        </div>

        <h4 className="issue-item_title">
          <NavLink to={`/details#${number}`}>{title} </NavLink>
        </h4>
        <div className="issue-item_more">
          <a href={url} target="_blank">
            Перейти
          </a>
        </div>
      </div>

      <div className="issue-item_footer">
        <span className="issue-item_date">Создано: {correctDate}</span>
        <span className="issue-item_number">Номер обращения: {number}</span>
      </div>
    </div>
  )
}

export { IssueItem }
