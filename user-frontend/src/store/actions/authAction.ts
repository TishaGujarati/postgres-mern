import axios from 'axios';
import { Dispatch } from 'redux';
import { API_URL } from '../../config/user.config';
import { AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE } from '../type';

export const loginUser = (credentials: { email: string; password: string }) => async (dispatch: Dispatch<AuthActionTypes>) => {
   try {
     const response = await axios.post(`${API_URL}/login`, credentials);
     dispatch({ type: LOGIN_SUCCESS, payload: response.data });
   } catch (error) {
     const errorMessage = typeof error === 'string' ? error : 'An error occurred during login.';
     dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
   }
 };
 
 export const registerUser = (userData: { id: number; firstname: string; lastname: string; email: string; password: string }) => async (dispatch: Dispatch<AuthActionTypes>) => {
   try {
     const response = await axios.post(`${API_URL}/register`, userData);
     dispatch({ type: REGISTER_SUCCESS, payload: response.data });
   } catch (error) {
     const errorMessage = typeof error === 'string' ? error : 'An error occurred during registration.';
     dispatch({ type: REGISTER_FAILURE, payload: errorMessage });
   }
 };