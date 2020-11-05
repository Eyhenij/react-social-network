import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import {updateNewPostText} from './redux/state'


let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default reRenderEntireTree;