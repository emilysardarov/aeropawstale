import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchProducts} from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Header from './Header';
import Account from './Accounts/Account';
import Orders from './Accounts/Orders';
import UserUpdate from './Accounts/UserUpdate';
import SuccessCheckout from './SuccessCheckout';
import CancelCheckout from './CancelCheckout';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=>{
    dispatch(fetchProducts());
  }, []);

  useEffect(()=> {
    if(auth.id){
      dispatch(fetchCart());
    }
  }, [auth]);
  
  if (!auth.id) {
    return <Login />
  } 

  return (
    <div>

      <Header />
      <div>
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:productFilter' element={<Products />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/:page' element={<Account />} />
          <Route path='/products/:productFilter/:id' element={<ProductDetails />} />
          <Route path='/success/:id' element={<SuccessCheckout />} />
          <Route path='/cancel' element={<CancelCheckout />} />
        </Routes>
      </div>
    </div>
       
  );
};

export default App;
