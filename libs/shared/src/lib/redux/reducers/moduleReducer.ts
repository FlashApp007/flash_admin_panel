import { MODULE_ACTION_TYPES } from '../types/actionTypes';
import { ModuleState } from '../types/stateTypes';
import { ModuleAction } from '../types/actionInterfaces';

// Initial state for modules
const initialState: ModuleState = {
  modules: [],
  currentModule: null,
  loading: false,
  error: null,
};

// Module reducer
const moduleReducer = (state = initialState, action: ModuleAction): ModuleState => {
  switch (action.type) {
    // Fetch modules cases
    case MODULE_ACTION_TYPES.FETCH_MODULES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MODULE_ACTION_TYPES.FETCH_MODULES_SUCCESS:
      return {
        ...state,
        modules: action.payload,
        loading: false,
        error: null,
      };
    case MODULE_ACTION_TYPES.FETCH_MODULES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Fetch single module cases
    case MODULE_ACTION_TYPES.FETCH_MODULE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MODULE_ACTION_TYPES.FETCH_MODULE_SUCCESS:
      return {
        ...state,
        currentModule: action.payload,
        loading: false,
        error: null,
      };
    case MODULE_ACTION_TYPES.FETCH_MODULE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Create module cases
    case MODULE_ACTION_TYPES.CREATE_MODULE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MODULE_ACTION_TYPES.CREATE_MODULE_SUCCESS:
      return {
        ...state,
        modules: [...state.modules, action.payload],
        currentModule: action.payload,
        loading: false,
        error: null,
      };
    case MODULE_ACTION_TYPES.CREATE_MODULE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Update module cases
    case MODULE_ACTION_TYPES.UPDATE_MODULE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MODULE_ACTION_TYPES.UPDATE_MODULE_SUCCESS:
      return {
        ...state,
        modules: state.modules.map(module => 
          module.id === action.payload.id ? action.payload : module
        ),
        currentModule: action.payload,
        loading: false,
        error: null,
      };
    case MODULE_ACTION_TYPES.UPDATE_MODULE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    // Delete module cases
    case MODULE_ACTION_TYPES.DELETE_MODULE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MODULE_ACTION_TYPES.DELETE_MODULE_SUCCESS:
      return {
        ...state,
        modules: state.modules.filter(module => module.id !== action.payload),
        currentModule: state.currentModule?.id === action.payload ? null : state.currentModule,
        loading: false,
        error: null,
      };
    case MODULE_ACTION_TYPES.DELETE_MODULE_FAILURE:
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

export default moduleReducer;
