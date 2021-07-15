import React from 'react'

interface Props {
  amountElems: number | null
  perPage: number
  onChange(page: number): void
  active: number
}

const Pagination: React.FC<Props> = ({
  amountElems,
  perPage,
  onChange,
  active,
}) => {
  const pageCount: number = amountElems ? Math.ceil(amountElems / perPage) : 0
  const links: number[] = []

  for (let i = 1; i <= pageCount; i++) {
    links.push(i)
  }

  const clickHandler = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    e.preventDefault()
    onChange(page)
  }

  return (
    <ul className="pagination">
      {links.map((num: number) => (
        <li key={num} className={active === num ? 'active' : undefined}>
          <a
            href={num.toString()}
            onClick={(e) => {
              clickHandler(e, num)
            }}
          >
            {num}
          </a>
        </li>
      ))}
    </ul>
  )
}

export { Pagination }
