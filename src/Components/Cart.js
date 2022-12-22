import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchCart, removeFromCart } from '../store';
import CheckoutStripe from './CheckoutStripe';
import { Link } from 'react-router-dom';

const Cart = ()=> {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchCart())
  },[]);

  const {lineItems} = cart; 

  if( lineItems.length === 0) {
    return(
      <div>
        <h2> Your cart is empty </h2>
        <img src='../../static/sadPuppy.jpg' width='300px'/>
      </div>
    )
  }

  const orderTotal = ()=> {
    return (
      lineItems.reduce((total, lineItem) => {
        return total += (lineItem.quantity * lineItem.product.price)
      },0)
    )
  };
  
  return (
    <div id='container2'>
      <div className='cart-Container'>
        <h2>Cart</h2>
        <div className='cart-labels'>
          <div className='label-prods'>Products</div>
          <div className='label-quant'>Quantity</div>
          <div className='label-price'>Price</div>
        </div>
        <div className='line-items'>
          {lineItems.map((lineItem, idx) => {
            return (
              <div className='lineItem-Container' key={idx}>
                <div className='cart-left'>
                <Link to={`/products/${lineItem.product.id}`}>
                <img 
                src={lineItem.product.imageUrl}
                width='100px'
                />
                </Link>
                  <div className='line-item-title'>
                    {lineItem.product.name}
                    <div className='remove-from-cart' onClick={() => dispatch(removeFromCart(lineItem.product, lineItem.quantity))}>Remove from cart</div>
                  </div>
                  
              </div>
                  <div className='quantityAdjuster-container'>
                    <div>
                      <button className='cart-btn' onClick={() => dispatch(removeFromCart(lineItem.product, 1))}>-</button>
                    </div>
                    <div>
                      <span className='line-item-quantity'>{lineItem.quantity}</span>
                    </div>
                    <div>
                      <button className='cart-btn' onClick={()=>dispatch(addToCart(lineItem.product,1))}>+</button>
                    </div>
                  </div>
                <div className='cart-price'>
                    ${parseFloat(lineItem.product.price * lineItem.quantity).toFixed(2)}
                </div>
              </div>
            )
          })}
        </div>
        <br />
        <div className='stripe'>
          <CheckoutStripe />
          <div>Total: <strong>${parseFloat(orderTotal()).toFixed(2)}</strong></div>
        </div>
      </div>
    </div>      
  );
};

export default Cart;
