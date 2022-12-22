import axios from 'axios';

const cart = (state = { lineItems: [] }, action)=> {
  if(action.type === 'SET_CART'){
    return action.cart;
  }
  if (action.type === 'ADD_TO_CART') {
    if(!state.lineItems.find(lineItem => lineItem.id === action.lineItem.id)){
      return {...state, lineItems: [...state.lineItems, action.lineItem]}
    }
     const updatedLineItems = state.lineItems.map(lineItem => {
      if(lineItem.id === action.lineItem.id){
        return action.lineItem
      }
      return lineItem
    })
    return {...state,lineItems: updatedLineItems}
  }
  if (action.type === 'REMOVE_CART') {
    const updatedLineItems = state.lineItems.reduce((accumulator, lineItem)=> {
      if(!Array.isArray(action.lineItem)){
        if(lineItem.id === action.lineItem.id){
          accumulator.push(action.lineItem)
          return accumulator
        }
        else{
          accumulator.push(lineItem)
          return accumulator
        }
      };
      if(lineItem.productId === action.lineItem[0].id){
        return accumulator
      }
      accumulator.push(lineItem);
      return accumulator
    },[])
    return {...state,lineItems: updatedLineItems}
 }
  return state;
};


export const fetchCart = ()=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

export const addToCart = (product, quantity) => {
  return async (dispatch) => {
    const updatedProduct = product;
    const token = window.localStorage.getItem('token');
    const response = await axios.post(`/api/orders/cart`, { product, quantity }, {
      headers: {
        authorization: token
      }
    })
   const updatedLineItem = response.data.lineItems.find(lineItem => lineItem.productId === updatedProduct.id)
    dispatch({ type: 'ADD_TO_CART', lineItem: updatedLineItem});
  }
};

export const removeFromCart = (product, quantityToRemove) => {
  return async (dispatch) => {
    const updatedProduct = product;
    const token = window.localStorage.getItem('token');
    const response = await axios.put(`/api/orders/cart`, { product, quantityToRemove }, {
      headers: {
        authorization: token
      }
    })
   const updatedLineItem = response.data.lineItems.find(lineItem => lineItem.productId === updatedProduct.id) || [updatedProduct];
   dispatch({ type: 'REMOVE_CART', lineItem: updatedLineItem});
  }
};


export default cart;
