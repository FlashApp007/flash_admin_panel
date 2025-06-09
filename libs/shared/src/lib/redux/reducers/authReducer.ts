import { AUTH_ACTION_TYPES } from '../types/actionTypes.js';
import { AuthState } from '../types/stateTypes.js';

// Initial state for auth
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Auth reducer
const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    // Login cases
    case AUTH_ACTION_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case AUTH_ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Register cases
    case AUTH_ACTION_TYPES.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_ACTION_TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case AUTH_ACTION_TYPES.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Logout case
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
      };
      
    // Default case
    default:
      return state;
  }
};

export default authReducer;
