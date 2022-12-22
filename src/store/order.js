import axios from 'axios';

const orders = (state = [], action)=>{
    if(action.type === 'SET_ORDERS'){
        return action.orders;
    }
    if(action.type === 'CREATE_ORDERS'){
        return [...state, action.orders];
    }
    return state;
};

export const fetchOrders = ()=> {
    return async(dispatch)=>{
        try{
            const token = window.localStorage.getItem('token');
            const response = await axios.get('/api/orders', {
                headers: {
                    authorization: token
            }
            });
            dispatch({ type: 'SET_ORDERS', orders: response.data});
        } catch(ex){
            console.log(ex)
        }
        
    };
};

export const createOrder = ()=> {
    return async(dispatch) => {
        try {
            const token = window.localStorage.getItem('token');
            const response = await axios.post('/api/orders',{}, {
                headers: {
                    authorization: token
            }
            });   
            dispatch({ type: 'CREATE_ORDERS', orders: response.data});
        } catch (error) {
           console.log(error)
        }
    }
}

export default orders;