import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Sidebar from './components/sidebar.jsx';
import Profile from './components/profile';



const App = () => {
  return (
    <div className='page'>
      <header className='header'><Header /></header>
      <nav className='sidebar'><Sidebar /></nav>
      <div className='profile'><Profile /></div>
    </div>
  );
}

export default App;
