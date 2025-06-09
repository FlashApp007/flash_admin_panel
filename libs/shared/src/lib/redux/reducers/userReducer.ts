import { USER_ACTION_TYPES } from '../types/actionTypes.js';
import { UserProfileState } from '../types/stateTypes.js';

// Initial state for user profile
const initialState: UserProfileState = {
  profile: null,
  loading: false,
  error: null,
};

// User profile reducer
const userProfileReducer = (state = initialState, action: any): UserProfileState => {
  switch (action.type) {
    // Fetch profile cases
    case USER_ACTION_TYPES.FETCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_ACTION_TYPES.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: null,
      };
    case USER_ACTION_TYPES.FETCH_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Update profile cases
    case USER_ACTION_TYPES.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: null,
      };
    case USER_ACTION_TYPES.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Default case
    default:
      return state;
  }
};

export default userProfileReducer;
