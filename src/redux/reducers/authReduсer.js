import {authAPI} from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.newData, isAuth: true};
        }
        default:
            return state;
    }
};

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, newData: {userId, email, login}});
export const authThunk = () => (dispatch) => {
    authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login)); //наименования нужно брать из документации по API, но в том же порядке как и в редюсере
        }
    });
}

export default authReducer;