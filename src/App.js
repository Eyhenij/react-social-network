import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Sidebar from './components/sidebar.jsx';
import Profile from './components/profile';



const App = () => {
  return (
    <div className='page'>
      <div className='page__header'><Header /></div>
      <div className='page__sidebar'><Sidebar /></div>
      <div className='page__profile'><Profile /></div>
    </div>
  );
}

export default App;
