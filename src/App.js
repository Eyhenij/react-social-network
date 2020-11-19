import React from 'react';
import s from './App.module.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import ProfileContainer from './components/profile/profile.jsx';
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./components/messages/messagesContainer";
import TasksContainer from "./components/tasks/tasksContainer";
import ContactsContainer from "./components/contacts/contactsContainer";


const App = () => {
    return (
            <div className={s.page}>
                <div className={s.page__header}><Header/></div>
                <div className={s.page__sidebar}><Sidebar/></div>
                <div className={s.page__content}>
                    <Route path='/profile' render={()=> <ProfileContainer />}/>
                    <Route path='/contacts' render={()=> <ContactsContainer />}/>
                    <Route path='/messages' render={()=> <MessagesContainer />}/>
                    <Route path='/tasks' render={()=> <TasksContainer />}/>
                    <Route path='/news' render={ ()=> <News />}/>
                    <Route path='/settings' render={()=> <Settings />}/>
                </div>
            </div>
    );
}

export default App;
