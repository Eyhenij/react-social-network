import React, { Component } from 'react';
import s from './App.module.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Profile from './components/profile/profile.jsx';



const App = () => {
  return (
    <div className={s.page}>
      <div className={s.page__header}><Header /></div>
      <div className={s.page__sidebar}><Sidebar /></div>
      <div className={s.page__profile}><Profile /></div>
    </div>
  );
}

export default App;
