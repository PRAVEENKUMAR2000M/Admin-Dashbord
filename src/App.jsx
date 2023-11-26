import React, { useState } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserform from './EditUserform';

function App() {
  const userData = [
    { id: 1, name: 'praveen', userName: 'kumar' },
    { id: 2, name: 'marley', userName: 'bob' },
    { id: 3, name: 'indrajeet', userName: 'ajith' },
  ];

  const addUser = (user) => {
    user.id = Users.length + 1;
    setUsers([...Users, user]);
  };

  const deleteUser = (id) => {
    setUsers(Users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const [Users, setUsers] = useState(userData);

  const [editing, setEditing] = useState(false);
  const InitialFormState = { id: null, name: '', userName: '' };
  const [currentUser, setcurrentUser] = useState(InitialFormState);
  const editRow = (user) => {
    setEditing(true)
    setcurrentUser({ id: user.id, name: user.name, userName: user.userName })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(Users.map((user) => (user.id === id ? updatedUser : user)));
  }
  return (
    <div className='container'>
      <h1>STUDENT & TEACHER MANAGEMENT</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (<div>
            <h2>Edit User</h2>
            <EditUserform
              setEditing={setEditing}
              updateUser={updateUser}
              currentUser={currentUser}
            />
          </div>) : (<div>
            <h1>Add Details</h1>
            <AddUserForm addUser={addUser} />
          </div>)
          }
        </div>
        <div className='flex-large'>
          <h1>View Details</h1>
          <UserTable editRow={editRow} deleteUser={deleteUser} Users={Users} />
        </div>
      </div>
    </div>
  );
}

export default App;
