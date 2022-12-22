

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import unitedStates from '../../../assets/unitedStates';
import { updateUser } from '../../store';

const UserUpdate = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state);
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
    
      useEffect(()=>{
            setInputs({
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                cellphone: user.cellphone,
                address1: user.address1,
                address2: user.address2,
                city: user.city,
                state: user.state,
                zip: user.zip,
            })
      },[user])

      const handleChange = (event)=> {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
      };

      const onSubmit = (event)=> {
        event.preventDefault();
        dispatch(updateUser(inputs));
      }
      
    return (
        <div className='user-update'>
            <h2>User Update</h2>
            <form onSubmit={onSubmit}>
                <label> Username </label>
                    <input name='username' value={inputs.username} type='text' placeholder='enter username' onChange={handleChange} required/>
                
                <label> Email </label>
                    <input name='email' value={inputs.email} type='text' placeholder='enter email' onChange={handleChange} required/>
                
                <label> First name </label>
                    <input name='firstName' value={inputs.firstName} type='text' onChange={handleChange} required/>
                
                <label> Last name </label>
                    <input name='lastName' value={inputs.lastName} type='text'  onChange={handleChange} required/>
                
                <label> Phone </label>
                    <input name='cellphone' value={inputs.cellphone} type='text' placeholder='' onChange={handleChange} required/>
                
                <label> Address 1 </label>
                    <input name='address1' value={inputs.address1} type='text'  onChange={handleChange} required/>
                
                <label> Address 2 </label>
                    <input name='address2' value={inputs.address2} type='text'  onChange={handleChange} />
                
                <label> City </label>
                    <input name='city' value={inputs.city} type='text'  onChange={handleChange} required/>
                
                <label> State </label>
                    <select name='state' value={inputs.state} onChange={handleChange}>
                        {unitedStates.map((state, idx) => {
                            return (
                                <option key={idx} value={state}>{state}</option>
                            )
                        })}
                    </select>
                
                <label> Zip Code </label>
                    <input name='zip' value={inputs.zip} type='text'  onChange={handleChange} required/>
        
                <button>Update Account</button>
            </form>
        </div>
    )
}

export default UserUpdate