import React from 'react';
import ReactDOM from "react-dom";
import './index.css'
import state from "./redux/state";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewMessageText, updateNewPostText, subscribe} from "./redux/state";


let reRenderEntireTree = (state) => {
 ReactDOM.render(
      <BrowserRouter>
      <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
      />
      </BrowserRouter>,
     document.getElementById('root'));
}
reRenderEntireTree(state)
subscribe(reRenderEntireTree);