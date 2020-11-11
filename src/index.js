import React from 'react';
import ReactDOM from "react-dom";
import './index.css'
import store from "./redux/reduxStore";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let reRenderEntireTree = (state) => {
 ReactDOM.render(
      <BrowserRouter>
      <App
          state={state}
          dispatch={store.dispatch.bind(store)}
      />
      </BrowserRouter>,
     document.getElementById('root'));
}
reRenderEntireTree(store.getState())
store.subscribe( () => {
    let state = store.getState();
    reRenderEntireTree(state);
});