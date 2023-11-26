import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {
  const InitialFormState = { id: null, name: '', userName: '' };
  const [formUser, setformUser] = useState(InitialFormState);
  const handleChange = (event) => {
    // setformUser(event.target.value)
    const { name, value } = event.target
    setformUser({ ...formUser, [name]: value });
  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      addUser(formUser);
      setformUser(InitialFormState);
    }}>
      <label>Teacher Name</label>
      <input type='text' onChange={handleChange} name='name' value={formUser.name} />
      <label>Student Name</label>
      <input type='text' onChange={handleChange} name='userName' value={formUser.userName} />
      <button>Add New Details</button>
    </form>
  )
}

export default AddUserForm;