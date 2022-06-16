import {combineReducers} from "redux";
import {USER_FEATURE_KEY, userReducer} from "./user/userList.reducer";
import {ROLE_FEATURE_KEY, roleReducer} from "./roles/roles.reducer";

let rootReducer = combineReducers({
    [USER_FEATURE_KEY] : userReducer,
    [ROLE_FEATURE_KEY]:roleReducer
});

export {rootReducer};
