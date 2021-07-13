import React from "react";
import { IIssueItem } from "../../interfaces/issues";

const IssueList: React.FC<IIssueItem> = ({title, createdAt, number, url}) => {
  return (
    <div className="issue-item">
      <div className="issue-item_header">
        <a href={url}>{title}</a>
      </div>
    </div>
  )
}

export {IssueList}