//Arun
import {LOGIN_REQUEST , SUCCESS , FAILURE} from './authTypes';

export const authenticateUser = (email, password) => {
 
    return dispatch=>{
        dispatch(loginRequest());
        if(email ==="admin@gmail.com" && password ==="admin"){
            dispatch(success());
        }
        else{
            dispatch(failure());
        }

    };
};
const loginRequest=()=>{
    return{
        type:LOGIN_REQUEST
    };
};
const success = ()=> {
    return {
        type:SUCCESS,
        payload:true
    };
};

const failure = () => {
    return {
        type:FAILURE,
        payload: false
    };
};



