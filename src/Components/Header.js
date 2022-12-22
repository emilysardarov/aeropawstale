import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../store";

const Header = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { cart } = useSelector(state => state)
    
    return (
        <div>
            <header>
                <Link to='/products/all'>
                    <h1>Aero<span className="effect">paw</span>stale</h1>
                </Link>
                <nav>
                    <Link to='/products/all' className={pathname.slice(0,9) === '/products' ? 'selected' : '' }>Products</Link>
                    <Link to='/cart' className={pathname === '/cart' ? 'selected' : ''}>Cart 

                         ({cart.lineItems.reduce((accum, lineItem) => accum += lineItem.quantity, 0)}) </Link>
                    <Link to='/account/orders' className={pathname.slice(0,8) === '/account' ? 'selected' : ''}>My Account</Link>

                    <button onClick={()=> dispatch(logout())}>Log Out</button>
                </nav>
            </header>
        </div>
        
    )
 };

export default Header;