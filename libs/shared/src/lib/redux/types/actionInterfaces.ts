import { User, UserProfile, Module, Zone } from './stateTypes';

// Define action interfaces for type safety in reducers

// Generic action interface
export interface Action<T = unknown> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: Record<string, unknown>;
}

// Auth action interfaces
export interface AuthAction extends Action<User | string | null> {
  type: string;
}

// User action interfaces
export interface UserAction extends Action<UserProfile | string | null> {
  type: string;
}

// Module action interfaces
export interface ModuleAction extends Action<Module | Module[] | string | null> {
  type: string;
}

// Zone action interfaces
export interface ZoneAction extends Action<Zone | Zone[] | string | null> {
  type: string;
}

// Error interface
export interface ApiError {
  message: string;
  status?: number;
  data?: Record<string, unknown>;
}
