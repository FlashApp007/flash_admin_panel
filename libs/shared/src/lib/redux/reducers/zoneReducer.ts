import { ZONE_ACTION_TYPES } from '../types/actionTypes.js';
import { ZoneState } from '../types/stateTypes.js';
import { ZoneAction } from '../types/actionInterfaces.js';

// Initial state for zones
const initialState: ZoneState = {
  zones: [],
  currentZone: null,
  loading: false,
  error: null,
};

// Zone reducer
const zoneReducer = (state = initialState, action: ZoneAction): ZoneState => {
  switch (action.type) {
    // Fetch zones cases
    case ZONE_ACTION_TYPES.FETCH_ZONES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ZONE_ACTION_TYPES.FETCH_ZONES_SUCCESS:
      return {
        ...state,
        zones: action.payload,
        loading: false,
        error: null,
      };
    case ZONE_ACTION_TYPES.FETCH_ZONES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Fetch single zone cases
    case ZONE_ACTION_TYPES.FETCH_ZONE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ZONE_ACTION_TYPES.FETCH_ZONE_SUCCESS:
      return {
        ...state,
        currentZone: action.payload,
        loading: false,
        error: null,
      };
    case ZONE_ACTION_TYPES.FETCH_ZONE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Create zone cases
    case ZONE_ACTION_TYPES.CREATE_ZONE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ZONE_ACTION_TYPES.CREATE_ZONE_SUCCESS:
      return {
        ...state,
        zones: [...state.zones, action.payload],
        currentZone: action.payload,
        loading: false,
        error: null,
      };
    case ZONE_ACTION_TYPES.CREATE_ZONE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Update zone cases
    case ZONE_ACTION_TYPES.UPDATE_ZONE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ZONE_ACTION_TYPES.UPDATE_ZONE_SUCCESS:
      return {
        ...state,
        zones: state.zones.map(zone => 
          zone.id === action.payload.id ? action.payload : zone
        ),
        currentZone: action.payload,
        loading: false,
        error: null,
      };
    case ZONE_ACTION_TYPES.UPDATE_ZONE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Delete zone cases
    case ZONE_ACTION_TYPES.DELETE_ZONE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ZONE_ACTION_TYPES.DELETE_ZONE_SUCCESS:
      return {
        ...state,
        zones: state.zones.filter(zone => zone.id !== action.payload),
        currentZone: state.currentZone?.id === action.payload ? null : state.currentZone,
        loading: false,
        error: null,
      };
    case ZONE_ACTION_TYPES.DELETE_ZONE_FAILURE:
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

export default zoneReducer;
