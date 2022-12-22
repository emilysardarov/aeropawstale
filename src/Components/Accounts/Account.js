import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useParams } from "react-router-dom"
import { fetchUser, logout } from "../../store"
import Orders from "./Orders"
import UserUpdate from "./UserUpdate"

const Account = () => {
    const { pathname } = useLocation()
    const { user } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUser());
    },[]);

    const { page } = useParams('name');
    return (
        <div id="container2">
            <h2><span className="effect">{ user.username }</span>'s Account</h2>
            <div className="accountNav"> 
                <Link to='/account/orders' className={pathname === '/account/orders' ? 'selected' : ''}>Orders</Link>
                <Link to='/account/update' className={pathname === '/account/update' ? 'selected' : ''}>Update Users</Link>
                <button className='logout-btn' onClick={()=> dispatch(logout())}>Log Out</button>
            </div>
            {page === 'update' && <UserUpdate /> }
            {page === 'orders' && <Orders /> }
        </div>
    )
}

export default Account