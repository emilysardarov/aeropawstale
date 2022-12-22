import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../store";

const CheckoutStripe = ()=> {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);
    const handleSubmit = (event) => {
        event.preventDefault();
        const serverCall = async() => {
            try {
              const response = await axios.post('/create-checkout-session', cart)
              if(response.data.url){
                window.location.href = response.data.url;
              }
            } catch (error) {
                console.log(error)
            }
        }
        serverCall();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Checkout</button>
            </form>
        </div>
    )
}

export default CheckoutStripe;