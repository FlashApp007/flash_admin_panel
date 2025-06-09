import { Dispatch } from 'redux';
import { apiService } from '../../helpers/apiClient';
import { ZONE_ACTION_TYPES } from '../types/actionTypes.js';
import { Zone } from '../types/stateTypes.js';

// Fetch all zones
export const fetchZones = () => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: ZONE_ACTION_TYPES.FETCH_ZONES_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.get<{ zones: Zone[] }>('/zones');
    
    // Dispatch success action with zones data
    dispatch({
      type: ZONE_ACTION_TYPES.FETCH_ZONES_SUCCESS,
      payload: response.data.zones,
    });
    
    return response.data.zones;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: ZONE_ACTION_TYPES.FETCH_ZONES_FAILURE,
      payload: error.response?.data?.message || 'Failed to fetch zones',
    });
    
    throw error;
  }
};

// Fetch single zone by ID
export const fetchZone = (zoneId: string) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: ZONE_ACTION_TYPES.FETCH_ZONE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.get<{ zone: Zone }>(`/zones/${zoneId}`);
    
    // Dispatch success action with zone data
    dispatch({
      type: ZONE_ACTION_TYPES.FETCH_ZONE_SUCCESS,
      payload: response.data.zone,
    });
    
    return response.data.zone;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: ZONE_ACTION_TYPES.FETCH_ZONE_FAILURE,
      payload: error.response?.data?.message || `Failed to fetch zone with ID: ${zoneId}`,
    });
    
    throw error;
  }
};

// Create a new zone
export const createZone = (zoneData: Omit<Zone, 'id' | 'createdAt' | 'updatedAt'>) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: ZONE_ACTION_TYPES.CREATE_ZONE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.post<{ zone: Zone }>('/zones', zoneData);
    
    // Dispatch success action with created zone data
    dispatch({
      type: ZONE_ACTION_TYPES.CREATE_ZONE_SUCCESS,
      payload: response.data.zone,
    });
    
    return response.data.zone;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: ZONE_ACTION_TYPES.CREATE_ZONE_FAILURE,
      payload: error.response?.data?.message || 'Failed to create zone',
    });
    
    throw error;
  }
};

// Update an existing zone
export const updateZone = (zoneId: string, zoneData: Partial<Zone>) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: ZONE_ACTION_TYPES.UPDATE_ZONE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.put<{ zone: Zone }>(`/zones/${zoneId}`, zoneData);
    
    // Dispatch success action with updated zone data
    dispatch({
      type: ZONE_ACTION_TYPES.UPDATE_ZONE_SUCCESS,
      payload: response.data.zone,
    });
    
    return response.data.zone;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: ZONE_ACTION_TYPES.UPDATE_ZONE_FAILURE,
      payload: error.response?.data?.message || `Failed to update zone with ID: ${zoneId}`,
    });
    
    throw error;
  }
};

// Delete a zone
export const deleteZone = (zoneId: string) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: ZONE_ACTION_TYPES.DELETE_ZONE_REQUEST });
    
    // Make API call using our apiService
    await apiService.delete(`/zones/${zoneId}`);
    
    // Dispatch success action with deleted zone ID
    dispatch({
      type: ZONE_ACTION_TYPES.DELETE_ZONE_SUCCESS,
      payload: zoneId,
    });
    
    return zoneId;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: ZONE_ACTION_TYPES.DELETE_ZONE_FAILURE,
      payload: error.response?.data?.message || `Failed to delete zone with ID: ${zoneId}`,
    });
    
    throw error;
  }
};
