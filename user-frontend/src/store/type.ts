export interface User {
   id: number;
   firstname: string;
   lastname: string;
   email: string;
 }
 
 export interface AuthState {
   user: User | null;
   error: string | null;
 }
 
 export interface UserState {
   userProfile: User | null;
   userList: User[];
   error: string | null;
 }
 
 // Auth Action Types
 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
 export const LOGIN_FAILURE = 'LOGIN_FAILURE';
 export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
 export const REGISTER_FAILURE = 'REGISTER_FAILURE';
 
 interface LoginSuccessAction {
   type: typeof LOGIN_SUCCESS;
   payload: User;
 }
 
 interface LoginFailureAction {
   type: typeof LOGIN_FAILURE;
   payload: string;
 }
 
 interface RegisterSuccessAction {
   type: typeof REGISTER_SUCCESS;
   payload: User;
 }
 
 interface RegisterFailureAction {
   type: typeof REGISTER_FAILURE;
   payload: string;
 }
 
 export type AuthActionTypes = LoginSuccessAction | LoginFailureAction | RegisterSuccessAction | RegisterFailureAction;
 
 // User Action Types
 export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
 export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';
 export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';
 export const FETCH_USER_LIST_FAILURE = 'FETCH_USER_LIST_FAILURE';
 
 interface FetchUserProfileSuccessAction {
   type: typeof FETCH_USER_PROFILE_SUCCESS;
   payload: User;
 }
 
 interface FetchUserProfileFailureAction {
   type: typeof FETCH_USER_PROFILE_FAILURE;
   payload: string;
 }
 
 interface FetchUserListSuccessAction {
   type: typeof FETCH_USER_LIST_SUCCESS;
   payload: User[];
 }
 
 interface FetchUserListFailureAction {
   type: typeof FETCH_USER_LIST_FAILURE;
   payload: string;
 }
 
 export type UserActionTypes =
   | FetchUserProfileSuccessAction
   | FetchUserProfileFailureAction
   | FetchUserListSuccessAction
   | FetchUserListFailureAction;
 