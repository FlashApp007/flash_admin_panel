import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userProfileReducer from './userReducer';
import moduleReducer from './moduleReducer';
import zoneReducer from './zoneReducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  userProfile: userProfileReducer,
  modules: moduleReducer,
  zones: zoneReducer,
});

export default rootReducer;
