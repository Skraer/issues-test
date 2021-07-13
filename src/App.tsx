import React from 'react';
import './App.css';
import { useEffect } from 'react';
// import { useState } from 'react';
import SearchForm from './view/SearchForm';
// import Home from './view/home/home';


const App: React.FC = () => {
  useEffect(() => {
    // requestUser(API_STRING).then(res => {console.log(res)});
  }, []);

  return (
    <div className="container">
      <header className="header">header</header>
      <SearchForm />
    </div>
  )
}

export default App;
