/**
 * @jest-environment jsdom
 */
// import { act, render } from '@testing-library/react'
import React from 'react'
// import { act } from 'react-dom/test-utils'
// import { unmountComponentAtNode } from 'react-dom'
import IssueItem from './IssueItem'
import { render } from '@testing-library/react'
import { IIssueItem } from '../../interfaces/issues'
import { BrowserRouter } from 'react-router-dom'

const testProps: IIssueItem = {
  title: 'Some title',
  createdAt: '2021-07-22T08:53:52.648Z',
  number: '1331',
  url: 'https://test-url.com',
  user: {
    avatar: 'https://avatar.url',
    url: 'https://user.url',
    username: 'Skraer',
  },
  body: 'some text',
}

type containerType = Element | null

test('rendered', () => {
  const root: containerType = document.createElement('div')
  const component = <IssueItem {...testProps} />
  const { container } = render(<BrowserRouter>{component}</BrowserRouter>, {
    container: document.body.appendChild(root),
  })
  expect(container).toBeDefined()
  expect(container.querySelector('.issue-item_user-link')!.textContent).toBe(
    'Skraer'
  )
  // expect(findByText('Skraer')).toBeInTheDocument()
})
