import {combineReducers, createStore} from "redux";
import messagesReducer from "./reducers/messagesReducer";
import headerReducer from "./reducers/headerReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import tasksReducer from "./reducers/tasksReducer";
import contactsReducer from "./reducers/contactsReducer";
import profileReducer from "./reducers/profileReduсer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    headerItems: headerReducer,
    sidebarItems: sidebarReducer,
    tasksPage: tasksReducer,
    contactsPage: contactsReducer,

});

let store = createStore(reducers);

window.store = store;

export default store;