import React, { useEffect, useState } from 'react';

function EditUserform({ currentUser, setEditing, updateUser }) {
  const InitialFormState = { id: null, name: '', userName: '' };
  const [formUser, setFormUser] = useState(currentUser);
  useEffect(() => {
    setFormUser(currentUser)
  }, [currentUser])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser({ ...formUser, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateUser(formUser.id, formUser);  
        setFormUser(InitialFormState);
        setEditing(false);
      }}
    >
      <label>Name</label>
      <input type='text' onChange={handleChange} name='name' value={formUser.name} />
      <label>UserName</label>
      <input type='text' onChange={handleChange} name='userName' value={formUser.userName} />
      <button>Update User</button>
      <button className='button muted-button' onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );
}

export default EditUserform;
