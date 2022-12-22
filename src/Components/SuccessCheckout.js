import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, fetchCart, fetchOrders } from '../store';
import { useParams } from 'react-router-dom'

const SuccessCheckout = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { orders } = useSelector(state => state);
    const newOrder = orders.find(order => order.id === id);

    const orderTotal = ()=> {
        return (
            newOrder.lineItems.reduce((total, lineItem) => {
            return total += (lineItem.quantity * lineItem.product.price)
          },0)
        )
      };
    
    useEffect(()=>{
        dispatch(createOrder());
        dispatch(fetchOrders());
        dispatch(fetchCart());
    },[]);

    let total;
    if(newOrder){
      total = orderTotal()
      total = parseFloat(total).toFixed(2);
      console.log(total)
    }
    
    return (
        <div id='container2'>
          <div className='cart-Container'>
            <h2>Order confirmed</h2>
            <div className='cart-labels'>
              <div className='label-prods'>Products</div>
              <div className='label-quant'>Quantity</div>
              <div className='label-price'>Price</div>
            </div>
            { newOrder && <div className='line-items'>
              {newOrder.lineItems.map((lineItem, idx) => {
                return (
                  <div className='lineItem-Container' key={idx}>
                    <div className='cart-left'>
                    <img 
                    src={lineItem.product.imageUrl}
                    width='100px'
                    />
                      <div className='line-item-title'>
                        {lineItem.product.name}
                      </div>
                  </div>
                      <div className='quantityAdjuster-container'>
                        <div>
                          <span className='line-item-quantity'>{lineItem.quantity}</span>
                        </div>
                      </div>
                    <div className='cart-price'>
                        ${parseFloat(lineItem.product.price * lineItem.quantity).toFixed(2)}
                    </div>
                  </div>
                )
              })}
            </div>}
            <br />
            <div className='stripe'>
              <div>Total: <strong>${total}</strong></div>
            </div>
          </div>
        </div>      
      );
}

export default SuccessCheckout;