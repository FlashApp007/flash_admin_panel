import { Dispatch } from 'redux';
import { apiService } from '../../helpers/apiClient';
import { USER_ACTION_TYPES } from '../types/actionTypes';
import { UserProfile } from '../types/stateTypes';

// Fetch user profile action
export const fetchUserProfile = (userId: string) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: USER_ACTION_TYPES.FETCH_PROFILE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.get<{ profile: UserProfile }>(`/users/${userId}/profile`);
    
    // Dispatch success action with profile data
    dispatch({
      type: USER_ACTION_TYPES.FETCH_PROFILE_SUCCESS,
      payload: response.data.profile,
    });
    
    return response.data.profile;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: USER_ACTION_TYPES.FETCH_PROFILE_FAILURE,
      payload: error.response?.data?.message || 'Failed to fetch user profile',
    });
    
    throw error;
  }
};

// Update user profile action
export const updateUserProfile = (userId: string, profileData: Partial<UserProfile>) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: USER_ACTION_TYPES.UPDATE_PROFILE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.put<{ profile: UserProfile }>(`/users/${userId}/profile`, profileData);
    
    // Dispatch success action with updated profile data
    dispatch({
      type: USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
      payload: response.data.profile,
    });
    
    return response.data.profile;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: USER_ACTION_TYPES.UPDATE_PROFILE_FAILURE,
      payload: error.response?.data?.message || 'Failed to update user profile',
    });
    
    throw error;
  }
};
