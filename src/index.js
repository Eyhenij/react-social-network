import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Post from "./components/profile/myPosts/post/post";
import Message from "./components/messages/dialogs/message/message";
import DialogItem from "./components/messages/dialogs/dialodItem";

let arrPosts = [
    {id: 1, likesCounte: 15, post: 'Hi! How are you?'},
    {id: 2, likesCounte: 12, post: 'This is my first post'},
    {id: 3, likesCounte: 9, post: 'blablabla'},
    {id: 4, likesCounte: 3, post: 'ahhrrrr'}
]
let postsItems = arrPosts.map (p => <Post message={p.post} likesCount={p.likesCounte}/>)


let arrMessages = [
    {id: 1, message: 'Hi! How are you?'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'How is your study?'}
]
let messagesItems = arrMessages.map (m => <Message message={m.message} id={m.id}/>)


let arrCommunity = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Olga'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'John'}
]
const communityItems = arrCommunity.map (c => <DialogItem name={c.name} id={c.id}/>)


ReactDOM.render(
    <React.StrictMode>
        <App
            postsItems={postsItems}
            messagesItems={messagesItems}
            communityItems={communityItems}
        />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
