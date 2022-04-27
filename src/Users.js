import React from 'react'
import { Link } from 'react-router-dom';

function Users() {
    let users = [
        {
            id : 1,
            name : "Person 1",
            position : "CEO",
            office : "Chennai",
            age : 20,
            startDate : "2020-01-02",
            salary : 40000
        },
        {
            id : 2,
            name : "Person 2",
            position : "CTO",
            office : "Delhi",
            age : 22,
            startDate : "2020-03-02",
            salary : 60000
        },
        {
            id : 3,
            name : "Person 3",
            position : "CEO",
            office : "Mumbai",
            age : 23,
            startDate : "2020-03-06",
            salary : 90000
        },
        {
            id : 4,
            name : "Person 4",
            position : "CTO",
            office : "Chennai",
            age : 24,
            startDate : "2020-03-04",
            salary : 70000
        },
        {
            id : 5,
            name : "Person 5",
            position : "CEO",
            office : "Bombey",
            age : 24,
            startDate : "2020-03-05",
            salary : 80000
        },
    ]
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">User List</h1>
                        <Link to={"/user-create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                    </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.map((user) => {
                                        return <tr>
                                        <td>{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{user.office}</td>
                                        <td>{user.startDate}</td>
                                        <td>{user.age}</td>
                                        <td>{user.salary}</td>

                                        
                                        <td>
                                            <Link to={`/user-view/${user.id}`} className="btn btn-warning btn-sm">View</Link>
                                            <Link to={`/user-edit/${user.id}`} className="btn btn-primary btn-sm">Edit</Link>
                                            <button className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>

                                    })
                                }
                                
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Users;