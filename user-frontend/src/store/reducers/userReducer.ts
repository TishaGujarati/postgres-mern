import { UserActionTypes, UserState, FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILURE, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILURE } from '../type';

const initialState: UserState = {
  userProfile: null,
  userList: [],
  error: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, userProfile: action.payload, error: null };
    case FETCH_USER_LIST_SUCCESS:
      return { ...state, userList: action.payload, error: null };
    case FETCH_USER_PROFILE_FAILURE:
    case FETCH_USER_LIST_FAILURE:
      return { ...state, userProfile: null, userList: [], error: action.payload };
    default:
      return state;
  }
};

export default userReducer;