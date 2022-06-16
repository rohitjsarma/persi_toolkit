import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { ROLE_FEATURE_KEY } from "../redux/roles/roles.reducer";
import { fetchRoles } from "../redux/roles/roles.actions";
let Role = () => {
    let dispatch = useDispatch()
    // fetch data from REDUX Store
    let roleInfo = useSelector((state) => {
        return state[ROLE_FEATURE_KEY];
    });

    let getRole = () => {
        dispatch(fetchRoles());
    };
    let openModal=()=>{
        alert('Open Modal')
    }
    return (
        <div>
            <pre>{JSON.stringify(roleInfo)}</pre>

            <div>
                <span ><strong className="btn btn-link">Client</strong></span> &nbsp;&nbsp;
                <span><strong className="btn btn-link" onClick={getRole}>Roles</strong></span> &nbsp;&nbsp;
                <span><strong className="btn btn-link">Users</strong></span>
            </div> <br/>
            <h1 className="text-danger text-bold">ROLES</h1>



            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Role</th>
                    <th scope="col">Permissions</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    roleInfo.roles.length > 0 ? <React.Fragment>
                        {
                            roleInfo.roles.map((user) => {
                                return(
                                    <tr key={user.role_id}>
                                        <td>{user.role_id}</td>
                                        <td>{user.role_desc}</td>
                                        <td>{user.role_id}</td>
                                        <td>EDIT || DELETE</td>

                                    </tr>
                                )
                            })
                        }
                    </React.Fragment> : null
                }
             {/*   <tr >
                    <td>1</td>
                    <td>Org Admin</td>
                    <td>Update</td>
                    <td><button className="btn btn-link" onClick={openModal}>EDIT </button> || <button className="btn btn-link">DELETE</button></td>
                </tr>*/}


                </tbody>
            </table>


        </div>
    );
};

export default Role;