import axios from 'axios';
import { Dispatch } from 'redux';
import {API_URL} from '../../config/user.config';
import { UserActionTypes, FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILURE, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILURE } from '../type';

export const fetchUserProfile = (email: string) => async (dispatch: Dispatch<UserActionTypes>) => {
   try {
     const response = await axios.get(`${API_URL}/profile/${email}`);
     dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: response.data });
   } catch (error) {
     const errorMessage = typeof error === 'string' ? error : 'An error occurred while fetching user profile.';
     dispatch({ type: FETCH_USER_PROFILE_FAILURE, payload: errorMessage });
   }
 };
 
 export const fetchUserList = () => async (dispatch: Dispatch<UserActionTypes>) => {
   try {
     const response = await axios.get(`${API_URL}/users`);
     dispatch({ type: FETCH_USER_LIST_SUCCESS, payload: response.data });
   } catch (error) {
     const errorMessage = typeof error === 'string' ? error : 'An error occurred while fetching the user list.';
     dispatch({ type: FETCH_USER_LIST_FAILURE, payload: errorMessage });
   }
 };