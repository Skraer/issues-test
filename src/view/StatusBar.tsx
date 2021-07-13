import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IStatusBar, StatusBarClassType } from "../interfaces/searchForm";
// import { StatusBarClassType } from "../interfaces/SearchForm";

const StatusBar: React.FC<IStatusBar> = ({status}) => {
  const [text, setText] = useState('');
  const [statusClass, setStatusClass] = useState<StatusBarClassType>(null);

  const changeStatusClass = (): void => {
    switch (status) {
      case 'loading':
        setText('Загрузка...');
        setStatusClass(null);
        break;
      case 'error':
        setText('Ошибка запроса');
        setStatusClass('error');
        break;
      case 'done':
        setText('Данные загружены');
        setStatusClass('done');
        break;
      default:
        setText('');
        setStatusClass(null);
        break;
    }
  };

  useEffect(() => {
    changeStatusClass();
  }, [status]);

  return (
    <div className={`request-status ${statusClass}`}>
      {text}
    </div>
  )
}

export {StatusBar};