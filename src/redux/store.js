import {combineReducers, createStore} from "redux";
import postsReducer from "./reducers/postsReduсer";
import messagesReducer from "./reducers/messagesReducer";
import headerReducer from "./reducers/headerReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import tasksReducer from "./reducers/tasksReducer";
import contactsReducer from "./reducers/contactsReducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    messagesPage: messagesReducer,
    headerItems: headerReducer,
    sidebarItems: sidebarReducer,
    tasksPage: tasksReducer,
    contactsPage: contactsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;