import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from "../constants/userConstants"
import {AuthServices} from "../../supplier"

export const login = (mobile) => async(dispatch) => {
    try {
        dispatch({type:LOGIN_REQUEST});

        const config = {headers: {"Content-Type": "application/json"}};


        const {data} = await AuthServices.login({mobile},config)

        dispatch({type: LOGIN_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message,
        });
    }
};


// REGISTER
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST});

        // const config = {headers : {"Content-Type": "multipart/form-data"}};
        const config = {headers : {"Content-Type": "application/json"}};

        const {data} = await AuthServices.register(userData,config);

        dispatch({type: REGISTER_USER_SUCCESS, payload: data.user});

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({type:LOAD_USER_REQUEST});

        const {data} = await AuthServices.loadUser(); // to get the data of the logged in user.

        dispatch({type: LOAD_USER_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const logout = () => async(dispatch) => {
    try {

        await AuthServices.logoutUser(); 

        dispatch({type: LOGOUT_SUCCESS});
        
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message,
        });
    }
};
