import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {USER_FEATURE_KEY} from "../redux/user/userList.reducer";
import {userList} from "../redux/user/userList.actions";

let  Userlist=()=> {
    let dispatch = useDispatch()

    let userInfo=useSelector((state)=>{
        return state [USER_FEATURE_KEY] ;
    })

    let clickGetUserData = () => {
        dispatch(userList());
    };


    return (
        <div>

            <pre>{JSON.stringify(userInfo)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-sm btn-danger" onClick={clickGetUserData}>Get User List</button>
                        <div className="card mt-3">
                            <div className="card-header">
                                <strong className="text-danger text-center">User List</strong>
                            </div>
                            <div className="card-body">


                                                <table className="table table-dark table-hover text-center table-striped">
                                                    <thead className="bg-primary text-white">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>NAME</th>
                                                        <th>USERNAME</th>
                                                        <th>EMAIL</th>
                                                        <th>ADDRESS</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        userInfo.users.length>0 ?<React.Fragment>

                                                            {
                                                                userInfo.users.map((user)=>{
                                                                  return(
                                                                      <tr key={user.id}>
                                                                          <td>{user.id}</td>
                                                                          <td>{user.name}</td>
                                                                          <td>{user.username}</td>
                                                                          <td>{user.email}</td>
                                                                          <td>{user.address.city}</td>

                                                                      </tr>
                                                                  )

                                                            })
                                                            }
                                                        </React.Fragment> : null
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                            </div>
            </div>
        </div>


    );
}

export default Userlist;