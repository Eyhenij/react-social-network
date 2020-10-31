import React, {Component} from 'react';
import s from './App.module.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Profile from './components/profile/profile.jsx';
import Messages from "./components/messages/messages.jsx";
import {Route, BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className={s.page}>
                <div className={s.page__header}><Header/></div>
                <div className={s.page__sidebar}><Sidebar/></div>
                <div>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                    {/*<div className={s.page__profile}><Profile /></div>*/}
                    {/*<div className={s.page__messages}><Messages /></div>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
