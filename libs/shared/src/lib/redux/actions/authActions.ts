import { Dispatch } from 'redux';
import { apiService } from '../../helpers/apiClient';
import { AUTH_ACTION_TYPES } from '../types/actionTypes.js';
import { User } from '../types/stateTypes.js';

// Interface for login credentials
interface LoginCredentials {
  email: string;
  password: string;
}

// Interface for registration data
interface RegistrationData {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

// Login action
export const login = (credentials: LoginCredentials) => async (dispatch: Dispatch) => {
  try {
    // Dispatch login request action
    dispatch({ type: AUTH_ACTION_TYPES.LOGIN_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.post<{ user: User; token: string }>('/auth/login', credentials);
    
    // Store token in localStorage
    localStorage.setItem('authToken', response.data.token);
    
    // Dispatch success action with user data
    dispatch({
      type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
      payload: response.data.user,
    });
    
    return response.data;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: AUTH_ACTION_TYPES.LOGIN_FAILURE,
      payload: error.response?.data?.message || 'Login failed',
    });
    
    throw error;
  }
};

// Register action
export const register = (userData: RegistrationData) => async (dispatch: Dispatch) => {
  try {
    // Dispatch register request action
    dispatch({ type: AUTH_ACTION_TYPES.REGISTER_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.post<{ user: User; token: string }>('/auth/register', userData);
    
    // Store token in localStorage
    localStorage.setItem('authToken', response.data.token);
    
    // Dispatch success action with user data
    dispatch({
      type: AUTH_ACTION_TYPES.REGISTER_SUCCESS,
      payload: response.data.user,
    });
    
    return response.data;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: AUTH_ACTION_TYPES.REGISTER_FAILURE,
      payload: error.response?.data?.message || 'Registration failed',
    });
    
    throw error;
  }
};

// Logout action
export const logout = () => (dispatch: Dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('authToken');
  
  // Dispatch logout action
  dispatch({ type: AUTH_ACTION_TYPES.LOGOUT });
};
