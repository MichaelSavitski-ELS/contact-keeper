import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../Types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAutheticated: null,
        loading: true,
        user: null,
        error: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const loadUser = () => {

    }

    const registerUser = () => {

    }

    const loginUser = () => {

    }

    const logout = () => {

    }

    const clearErrors = () => {

    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAutheticated: state.isAutheticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                loadUser,
                registerUser,
                loginUser,
                logout,
                clearErrors,
            }}>
            { props.children}
        </AuthContext.Provider>
    )

};

export default AuthState;