import { Dispatch } from 'redux';
import { apiService } from '../../helpers/apiClient';
import { MODULE_ACTION_TYPES } from '../types/actionTypes';
import { Module } from '../types/stateTypes';

// Fetch all modules
export const fetchModules = () => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: MODULE_ACTION_TYPES.FETCH_MODULES_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.get<{ modules: Module[] }>('/modules');
    
    // Dispatch success action with modules data
    dispatch({
      type: MODULE_ACTION_TYPES.FETCH_MODULES_SUCCESS,
      payload: response.data.modules,
    });
    
    return response.data.modules;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: MODULE_ACTION_TYPES.FETCH_MODULES_FAILURE,
      payload: error.response?.data?.message || 'Failed to fetch modules',
    });
    
    throw error;
  }
};

// Fetch single module by ID
export const fetchModule = (moduleId: string) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: MODULE_ACTION_TYPES.FETCH_MODULE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.get<{ module: Module }>(`/modules/${moduleId}`);
    
    // Dispatch success action with module data
    dispatch({
      type: MODULE_ACTION_TYPES.FETCH_MODULE_SUCCESS,
      payload: response.data.module,
    });
    
    return response.data.module;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: MODULE_ACTION_TYPES.FETCH_MODULE_FAILURE,
      payload: error.response?.data?.message || `Failed to fetch module with ID: ${moduleId}`,
    });
    
    throw error;
  }
};

// Create a new module
export const createModule = (moduleData: Omit<Module, 'id' | 'createdAt' | 'updatedAt'>) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: MODULE_ACTION_TYPES.CREATE_MODULE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.post<{ module: Module }>('/modules', moduleData);
    
    // Dispatch success action with created module data
    dispatch({
      type: MODULE_ACTION_TYPES.CREATE_MODULE_SUCCESS,
      payload: response.data.module,
    });
    
    return response.data.module;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: MODULE_ACTION_TYPES.CREATE_MODULE_FAILURE,
      payload: error.response?.data?.message || 'Failed to create module',
    });
    
    throw error;
  }
};

// Update an existing module
export const updateModule = (moduleId: string, moduleData: Partial<Module>) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: MODULE_ACTION_TYPES.UPDATE_MODULE_REQUEST });
    
    // Make API call using our apiService
    const response = await apiService.put<{ module: Module }>(`/modules/${moduleId}`, moduleData);
    
    // Dispatch success action with updated module data
    dispatch({
      type: MODULE_ACTION_TYPES.UPDATE_MODULE_SUCCESS,
      payload: response.data.module,
    });
    
    return response.data.module;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: MODULE_ACTION_TYPES.UPDATE_MODULE_FAILURE,
      payload: error.response?.data?.message || `Failed to update module with ID: ${moduleId}`,
    });
    
    throw error;
  }
};

// Delete a module
export const deleteModule = (moduleId: string) => async (dispatch: Dispatch) => {
  try {
    // Dispatch request action
    dispatch({ type: MODULE_ACTION_TYPES.DELETE_MODULE_REQUEST });
    
    // Make API call using our apiService
    await apiService.delete(`/modules/${moduleId}`);
    
    // Dispatch success action with deleted module ID
    dispatch({
      type: MODULE_ACTION_TYPES.DELETE_MODULE_SUCCESS,
      payload: moduleId,
    });
    
    return moduleId;
  } catch (error: any) {
    // Dispatch failure action with error message
    dispatch({
      type: MODULE_ACTION_TYPES.DELETE_MODULE_FAILURE,
      payload: error.response?.data?.message || `Failed to delete module with ID: ${moduleId}`,
    });
    
    throw error;
  }
};
