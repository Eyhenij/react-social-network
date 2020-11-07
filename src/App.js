import React from 'react';
import s from './App.module.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Profile from './components/profile/profile.jsx';
import Messages from "./components/messages/messages.jsx";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className={s.page}>
                <div className={s.page__header}><Header/></div>
                <div className={s.page__sidebar}><Sidebar/></div>
                <div className={s.page__content}>
                    <Route path='/profile' render={()=>
                        <Profile
                            postsPage={props.state.postsPage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
                    <Route path='/messages' render={()=>
                        <Messages
                            messagesPage={props.state.messagesPage}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                        />}/>
                    <Route path='/news' render={ ()=> <News />}/>
                    <Route path='/music' render={ ()=> <Music />}/>
                    <Route path='/settings' render={()=> <Settings />}/>
                </div>
            </div>
    );
}

export default App;
