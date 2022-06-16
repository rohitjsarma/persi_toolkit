import Axios from "axios";
import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./userlist.actionTypes";

let fetchUserListRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
let fetchUserListSuccess=( users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload: users
    }
}
let fetchUserListFalure=(error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}
let userList=()=>{
   return (dispatch)=>{
       dispatch(fetchUserListRequest())
       Axios.get('https://jsonplaceholder.typicode.com/users').then((resp)=>{
           dispatch(fetchUserListSuccess(resp.data))
           console.log(resp.data)
       }).catch((error)=>{
           dispatch(fetchUserListFalure(error.data))
       })
   }
}
export  {userList}