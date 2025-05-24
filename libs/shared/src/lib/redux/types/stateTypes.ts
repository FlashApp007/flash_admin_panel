// Define the shape of the Redux state
// This helps with type checking throughout the application

// Auth state
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// User interface
export interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// User profile state
export interface UserProfileState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}

// User profile interface
export interface UserProfile {
  id: string;
  userId: string;
  bio?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  country?: string;
  preferences?: Record<string, any>;
}

// Module interface
export interface Module {
  id: string;
  name: string;
  description?: string;
  status: 'active' | 'inactive' | 'pending';
  features?: string[];
  config?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

// Module state
export interface ModuleState {
  modules: Module[];
  currentModule: Module | null;
  loading: boolean;
  error: string | null;
}

// Zone interface
export interface Zone {
  id: string;
  name: string;
  description?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  status: 'active' | 'inactive';
  moduleIds?: string[];
  createdAt: string;
  updatedAt: string;
}

// Zone state
export interface ZoneState {
  zones: Zone[];
  currentZone: Zone | null;
  loading: boolean;
  error: string | null;
}

// Root state that combines all state slices
export interface RootState {
  auth: AuthState;
  userProfile: UserProfileState;
  modules: ModuleState;
  zones: ZoneState;
  // Add more state slices as needed
}
