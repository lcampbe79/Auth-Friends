import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Login () {
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const handleChange = e => {
    setCredentials({
      credentials: {
        ...setCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', credentials)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  return (
    <div>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='username'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login;