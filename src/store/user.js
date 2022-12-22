import axios from 'axios';

const user = (state = [], action)=>{
    if(action.type === 'SET_USER'){
        return action.user;
    }
    if(action.type === 'UPDATE_USER'){
        return action.user;
    }
    return state;
};

export const fetchUser = ()=>{
    return async(dispatch)=>{
        const token = window.localStorage.getItem('token');
            const response = await axios.get('/api/users', {
                headers: {
                    authorization: token
      }
    });
        dispatch({type: 'SET_USER', user: response.data})
    }
}

export const updateUser = (user)=>{
    return async(dispatch)=>{
        const token = window.localStorage.getItem('token');
            const response = await axios.put(`/api/users`, {user},{
                headers: {
                    authorization: token
            },}
      );
        dispatch({type: 'UPDATE_USER', user: response.data})
    }
}

export default user