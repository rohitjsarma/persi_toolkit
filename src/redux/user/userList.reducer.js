import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./userlist.actionTypes";


export const USER_FEATURE_KEY = 'users';

let initialState = {
    loading : false,
    users : [],
    errorMessage : ''
};

let userReducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case FETCH_USER_REQUEST :
            return {
                ...state,
                loading : true
            };
        case FETCH_USER_SUCCESS :
            return {
                ...state,
                loading : false,
                users: payload
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage: payload
            };
        default : return  state;
    }
};
export {userReducer};
