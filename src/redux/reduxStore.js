import {combineReducers, createStore} from "redux";
import postsReducer from "./postsReduсer";
import messagesReducer from "./messagesReducer";
import headerReducer from "./headerReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    messagesPage: messagesReducer,
    headerItems: headerReducer,
    sidebarItems: sidebarReducer
});

let store = createStore(reducers);



export default store;