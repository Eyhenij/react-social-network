import {combineReducers, createStore} from "redux";
import postsReducer from "./reducers/postsReduсer";
import messagesReducer from "./reducers/messagesReducer";
import headerReducer from "./reducers/headerReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import tasksReducer from "./reducers/tasksReducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    messagesPage: messagesReducer,
    headerItems: headerReducer,
    sidebarItems: sidebarReducer,
    tasksPage: tasksReducer
});

let store = createStore(reducers);

export default store;