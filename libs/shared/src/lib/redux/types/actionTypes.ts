// Define action type constants to avoid string literals throughout the codebase
// This helps prevent typos and makes it easier to track all available actions

// Auth action types
export const AUTH_ACTION_TYPES = {
  LOGIN_REQUEST: 'auth/loginRequest',
  LOGIN_SUCCESS: 'auth/loginSuccess',
  LOGIN_FAILURE: 'auth/loginFailure',
  LOGOUT: 'auth/logout',
  REGISTER_REQUEST: 'auth/registerRequest',
  REGISTER_SUCCESS: 'auth/registerSuccess',
  REGISTER_FAILURE: 'auth/registerFailure',
};

// User action types
export const USER_ACTION_TYPES = {
  FETCH_PROFILE_REQUEST: 'user/fetchProfileRequest',
  FETCH_PROFILE_SUCCESS: 'user/fetchProfileSuccess',
  FETCH_PROFILE_FAILURE: 'user/fetchProfileFailure',
  UPDATE_PROFILE_REQUEST: 'user/updateProfileRequest',
  UPDATE_PROFILE_SUCCESS: 'user/updateProfileSuccess',
  UPDATE_PROFILE_FAILURE: 'user/updateProfileFailure',
};

// Module action types
export const MODULE_ACTION_TYPES = {
  FETCH_MODULES_REQUEST: 'module/fetchModulesRequest',
  FETCH_MODULES_SUCCESS: 'module/fetchModulesSuccess',
  FETCH_MODULES_FAILURE: 'module/fetchModulesFailure',
  FETCH_MODULE_REQUEST: 'module/fetchModuleRequest',
  FETCH_MODULE_SUCCESS: 'module/fetchModuleSuccess',
  FETCH_MODULE_FAILURE: 'module/fetchModuleFailure',
  CREATE_MODULE_REQUEST: 'module/createModuleRequest',
  CREATE_MODULE_SUCCESS: 'module/createModuleSuccess',
  CREATE_MODULE_FAILURE: 'module/createModuleFailure',
  UPDATE_MODULE_REQUEST: 'module/updateModuleRequest',
  UPDATE_MODULE_SUCCESS: 'module/updateModuleSuccess',
  UPDATE_MODULE_FAILURE: 'module/updateModuleFailure',
  DELETE_MODULE_REQUEST: 'module/deleteModuleRequest',
  DELETE_MODULE_SUCCESS: 'module/deleteModuleSuccess',
  DELETE_MODULE_FAILURE: 'module/deleteModuleFailure',
};

// Zone action types
export const ZONE_ACTION_TYPES = {
  FETCH_ZONES_REQUEST: 'zone/fetchZonesRequest',
  FETCH_ZONES_SUCCESS: 'zone/fetchZonesSuccess',
  FETCH_ZONES_FAILURE: 'zone/fetchZonesFailure',
  FETCH_ZONE_REQUEST: 'zone/fetchZoneRequest',
  FETCH_ZONE_SUCCESS: 'zone/fetchZoneSuccess',
  FETCH_ZONE_FAILURE: 'zone/fetchZoneFailure',
  CREATE_ZONE_REQUEST: 'zone/createZoneRequest',
  CREATE_ZONE_SUCCESS: 'zone/createZoneSuccess',
  CREATE_ZONE_FAILURE: 'zone/createZoneFailure',
  UPDATE_ZONE_REQUEST: 'zone/updateZoneRequest',
  UPDATE_ZONE_SUCCESS: 'zone/updateZoneSuccess',
  UPDATE_ZONE_FAILURE: 'zone/updateZoneFailure',
  DELETE_ZONE_REQUEST: 'zone/deleteZoneRequest',
  DELETE_ZONE_SUCCESS: 'zone/deleteZoneSuccess',
  DELETE_ZONE_FAILURE: 'zone/deleteZoneFailure',
};

// You can add more action type categories as needed
