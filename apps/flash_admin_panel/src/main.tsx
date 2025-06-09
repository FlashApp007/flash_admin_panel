import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './app/app';
import "./styles.css";

// Define types for the auth state and actions
interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  loading: boolean;
  error: string | null;
}

interface AuthAction {
  type: string;
  payload?: any; // We'll keep this as any since payload can vary
}

// Initialize user from localStorage if available
const getUserFromStorage = () => {
  try {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

// Auth reducer
function authReducer(state: AuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  user: getUserFromStorage(),
  loading: false,
  error: null
}, action: AuthAction) {
  switch (action.type) {
    case 'auth/loginRequest':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'auth/loginSuccess':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null
      };
    case 'auth/loginFailure':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'auth/logout':
      // Clear localStorage on logout
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null
      };
    default:
      return state;
  }
}

// Create a simple Redux store for authentication
const store = configureStore({
  reducer: {
    auth: authReducer
  },
  // Add middleware configuration if needed
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false // Allows non-serializable values in actions
  })
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
