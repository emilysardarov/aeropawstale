import axios from 'axios';
import React, { useState } from 'react';
import unitedStates from '../../assets/unitedStates';

const UserCreate = (loginToggleState) => {
  const {toggle, setToggle} = loginToggleState; 

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    cellphone: '',
    address1: '',
    address2: '',
    city: '',
    state: "AK - Alaska",
    zip: '',
  });

  const handleChange = (event)=> {
    setInputs({
        ...inputs,
        [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event)=> {
    event.preventDefault();
    const serverCall = async() => {
        try {
            axios.post('/api/users', inputs)
        } catch (error) {
            console.log(error)
        }
        setToggle(false)
        setInputs({
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            cellphone: '',
            address1: '',
            address2: '',
            city: '',
            state: "AK - Alaska",
            zip: '',
          })
    }
    serverCall();
  }

  return (
    <div>
      <h2>
        Create Account
      </h2>
    <form onSubmit={onSubmit}>
        <label> Username </label>
            <input name='username' type='text' onChange={handleChange} required/>
        
        <label> Password </label>
            <input type='password' name='password' onChange={handleChange} required/>
        
        <label> Email </label>
            <input name='email' type='text' onChange={handleChange} required/>
        
        <label> First name </label>
            <input name='firstName' type='text' onChange={handleChange} required/>
        
        <label> Last name </label>
            <input name='lastName' type='text' onChange={handleChange} required/>
        
        <label> Phone </label>
              <input name='cellphone' type='text' onChange={handleChange} required />
              
        <label> Address 1 </label>
            <input name='address1' type='text' placeholder='ex: 123 Main St.' onChange={handleChange} required/>
        
        <label> Address 2 </label>
            <input name='address2' type='text' placeholder='ex: Apt #1'  onChange={handleChange} />
        
        <label> City </label>
            <input name='city' type='text' onChange={handleChange} required/>
        
        <label> State </label>
            <select name='state' value={inputs.state} onChange={handleChange}>
                {unitedStates.map((state, idx) => {
                    return (
                        <option key={idx} value={state}>{state}</option>
                    )
                })}
            </select>
              
              
        <label> Zip Code </label>
            <input name='zip' type='text' onChange={handleChange} required/>
        
        <button>Create Account</button>
    </form>
    </div>
  );
};

export default UserCreate;
