import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import UserCreate from './UserCreate';
import Header from './Header';
import { useNavigate } from 'react-router-dom'

const Login = ()=> {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const [toggle,setToggle] = useState(false);

  const navigate = useNavigate();

  const login = (ev)=> {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
    navigate('/products/all')
  };
  
  return (
    <div>
      <Header />
      <div id='login'>
        <form onSubmit={login}>
          <h2>Login</h2>
          <label>Username</label>
          <input
            value = { credentials.username }
            name = 'username'
            onChange = { onChange }
          />
          <label>Password</label>
          <input
            name = 'password'
            value={ credentials.password }
            onChange = { onChange }
            type='password'
          />
          <button>Sign In</button>
          <div className='or'>or</div>
        </form>
        {!toggle && <button className='create-acc-btn' onClick={()=> {setToggle(!toggle)}}>Create Account</button>}
        {toggle && <UserCreate toggle={toggle} setToggle={setToggle}/>}
      </div>
    </div>
  );
};

export default Login;
