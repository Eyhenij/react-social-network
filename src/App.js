import React from 'react';
import s from './App.module.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Profile from './components/profile/profile.jsx';
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./components/messages/messagesContainer";
import TasksContainer from "./components/tasks/tasksContainer";


const App = (props) => {
    return (
            <div className={s.page}>
                <div className={s.page__header}><Header/></div>
                <div className={s.page__sidebar}><Sidebar/></div>
                <div className={s.page__content}>
                    <Route path='/profile' render={()=>
                        <Profile store={props.store} />}/>
                    <Route path='/messages' render={()=>
                    <MessagesContainer store={props.store} />}/>
                    <Route path='/tasks' render={()=>
                        <TasksContainer store={props.store} />}/>
                    <Route path='/news' render={ ()=> <News />}/>
                    <Route path='/music' render={ ()=> <Music />}/>
                    <Route path='/settings' render={()=> <Settings />}/>
                </div>
            </div>
    );
}

export default App;
