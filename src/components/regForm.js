//nned to make from and then export
//goes in like a tag elemnts in art coloctr at the end of main jsx in other index 

import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('username: ', username);
    console.log('password: ', password);
    setUsername('');
    setPassword('');
  }

  const handleChange = (event) => {
    setUsername(event.target.value);
  }

  return (
    <div id='container'>
      <div id='navbar'>
      Register a New User
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' name='username' value={username} onChange={handleChange} />
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default Form