
import { FETCH_ROLES_FAILURE, FETCH_ROLES_REQUEST, FETCH_ROLES_SUCCESS } from "./roles.actionType";

export const ROLE_FEATURE_KEY = 'roles';

let initialState = {
  loading : false,
  roles:[],
  errorMessage : '',

};

let roleReducer = (state = initialState , action) => {
  let {type , payload} = action;
  switch(type) {
    case FETCH_ROLES_REQUEST :
      return {
        ...state,
        loading : true
      };
    case FETCH_ROLES_SUCCESS :
      return  {
        ...state,
        loading: false,
        roles: payload
      };
    case FETCH_ROLES_FAILURE :
      return  {
        ...state,
        loading: false,
        errorMessage: payload
      };

    default : return state;
  }
};
export {roleReducer};
