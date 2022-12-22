import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Header from '../Components/Header';

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  
  return (
    <div id='container2'>
      <h1>Home</h1>
      <div>
        <p>Hi, { auth.username }!</p>
      </div>
      <div>
        <button className='logout-btn' onClick={()=> dispatch(logout())}>Log out</button>
      </div>
    </div>
  );
};

export default Home;
