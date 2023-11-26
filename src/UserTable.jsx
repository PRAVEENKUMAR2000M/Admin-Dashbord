import React from 'react'

function UserTable({ Users, deleteUser, editRow }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Teacher Name</th>
                    <th>Student Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {Users.length > 0 ? (
                    Users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td>
                                <button onClick={() => {
                                    editRow(user)
                                }} className="button muted-button">Edit</button>
                                <button onClick={()=>deleteUser(user.id)} className='button-muted-button'>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Details Found</td>
                    </tr>
                )
                }

            </tbody>
        </table>
    )
}

export default UserTable;