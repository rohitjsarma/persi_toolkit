import {FETCH_ROLES_REQUEST,FETCH_ROLES_SUCCESS,FETCH_ROLES_FAILURE} from "./roles.actionType";
import Axios from "axios";

let  fetchRoleRequest = () => {
  return {
    type : FETCH_ROLES_REQUEST
  }
};

let fetchRoleSuccess  = (roles) => {
  return {
    type : FETCH_ROLES_SUCCESS,
    payload : roles
  }
};

let fetchRoleFailure  = (error) => {
  return {
    type : FETCH_ROLES_FAILURE,
    payload : error
  }
};
let fetchRoles = () => {
  return (dispatch) => {
    dispatch(fetchRoleRequest());
    let dataURL = 'https://gt3g4qrb42.execute-api.us-east-1.amazonaws.com/dev/avellino/roles';
    Axios.get(dataURL).then((response) => {
      dispatch(fetchRoleSuccess(response.data.data))

      console.log(response.data)
      //console.log(response.data.permission)
      console.log(response.data.data)
    }).catch((error) => {
      dispatch(fetchRoleFailure(error))
    });
  }
};



export {fetchRoles};