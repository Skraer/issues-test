import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { DefaultIssuesState } from '../interfaces/issues'

const StatusBar: React.FC = () => {
  const [classes, setClasses] = useState(['request-status'])
  const [text, setText] = useState('')

  const loading = useSelector(
    (state: DefaultIssuesState) => state.issues.loading
  )
  const error = useSelector((state: DefaultIssuesState) => state.issues.error)

  useEffect(() => {
    if (loading) {
      setText('Загрузка...')
      setClasses(['request-status'])
    } else if (!loading && error) {
      setText('Ошибка запроса')
      setClasses(['request-status', 'error'])
    } else {
      setText('')
      // setClasses(['request-status', 'done'])
    }
  }, [error, loading])

  return <div className={classes.join(' ')}>{text}</div>
}

export { StatusBar }
