import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./reducers/messagesReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import tasksReducer from "./reducers/tasksReducer";
import contactsReducer from "./reducers/contactsReducer";
import profileReducer from "./reducers/profileReduсer";
import authReducer from "./reducers/authReduсer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebarItems: sidebarReducer,
    tasksPage: tasksReducer,
    contactsPage: contactsReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;