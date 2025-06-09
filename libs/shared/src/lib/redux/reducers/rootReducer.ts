import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import userProfileReducer from './userReducer.js';
import moduleReducer from './moduleReducer.js';
import zoneReducer from './zoneReducer.js';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  userProfile: userProfileReducer,
  modules: moduleReducer,
  zones: zoneReducer,
});

export default rootReducer;
