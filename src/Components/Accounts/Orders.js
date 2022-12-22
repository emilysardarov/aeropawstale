import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, fetchUser } from '../../store';
const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const Orders = () => {
    const { orders, user } = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchOrders());
    }, []);
    
    return (
        <div>
            <h2>Orders</h2>
            <div className='orders-container'>
                { orders.map((order, idx)=> {
                    return (
                       <OrderDetails key={ order.id } order={order} idx={ idx } user={ user }/> 
                    );
                })}
                
            </div>
        </div>
    );
};

const OrderDetails = ({order, idx, user }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div key={ order.id } className='order-details'>
            <h4 onClick={() => setToggle(!toggle)} className='order-toggle' >Order #{order.serial} ({order.lineItems.length} Items)</h4>
            <div>
                <div>Order Date: { dayjs(order.createdAt).format('MM/DD/YYYY LT') }</div>
                {user.state && <div className="shipping">Shipping Address: <br />
                    {user.address1} <br />
                    {user.address2} <br />
                    {user.city}, {user.state.substring(0, 2)} {user.zip} </div>}
            </div>
            
            <div className='order-line-items'>
                {toggle && order.lineItems.map(lineItem=>{
                    return (
                        <div className="order-allLine" key={lineItem.id}>
                            <img className='orders-product-image' src={lineItem.product.imageUrl} />
                            <p className="orderDetails">
                                <strong> {lineItem.product.name} </strong><br />
                                Quantity: {lineItem.quantity}<br />
                                ${parseFloat(lineItem.product.price * lineItem.quantity).toFixed(2) }
                            </p>   
                        </div>
                            );
                        })}
            </div>
            <div className="order-total">Order Total: ${ parseFloat(order.lineItems.reduce((acc, lineItem)=>{
                return acc += (lineItem.product.price * lineItem.quantity);
                }, 0.00)).toFixed(2)
            }
            </div>
        </div>
    );
};

export default Orders;