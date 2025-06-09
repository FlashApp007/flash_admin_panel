import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import loginImage from '../assets/loginwallpaper.png'; // Import image
import flash from '../assets/flashlog.jpg'; // Import image

// Custom styles
const styles = {
  greenPrimary: '#00A76F',
  greenSecondary: '#007B55',
  flashText: {
    color: '#007B55', // White color for contrast
    fontSize: '48px', // Increased font size
    fontWeight: 'bold', // Bold font weight
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adding a text shadow for better visibility
  },
};

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loginError, setLoginError] = useState<string | null>(null);
  
  const dispatch = useDispatch();
  
  // Access auth state from Redux store
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);


  
  // Define the credentials interface
  interface Credentials {
    email: string;
    password: string;
  }
  
  // Define the auth state structure
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
  
  interface RootState {
    auth: AuthState;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    
    try {
      // Create credentials object using our interface
      const credentials: Credentials = { email, password };
      
      // Dispatch login request action
      dispatch({ type: 'auth/loginRequest' });
      
      // Simulate API call (replace with actual API call when backend is ready)
      // This is a temporary solution until the shared library is properly set up
      setTimeout(() => {
        // For demo purposes, accept any non-empty credentials
        if (credentials.email && credentials.password) {
          const mockUser = {
            id: '1',
            username: credentials.email.split('@')[0],
            email: credentials.email,
            role: 'admin',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          // Store authentication status in localStorage
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('user', JSON.stringify(mockUser));
          
          // Dispatch success action
          dispatch({
            type: 'auth/loginSuccess',
            payload: mockUser
          });
        } else {
          // Dispatch failure action
          dispatch({
            type: 'auth/loginFailure',
            payload: 'Invalid email or password'
          });
          setLoginError('Invalid email or password');
        }
      }, 1000);
    } catch (error: unknown) {
      // Handle error with proper type checking
      const errorMessage = error instanceof Error ? error.message : 'An error occurred during login';
      setLoginError(errorMessage);
      
      // Dispatch failure action
      dispatch({
        type: 'auth/loginFailure',
        payload: errorMessage
      });
    }
  };


  
  // Effect to handle successful login
  useEffect(() => {
    if (isAuthenticated) {
      onLogin();
    }
  }, [isAuthenticated, onLogin]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
          <div className="flex items-center mb-6 space-x-4">
            <img src={flash} alt="Flash Logo" className="w-[150px] h-[150px] rounded-full object-cover" />
            <h1 className="text-4xl font-normal italic text-green-500 drop-shadow-lg" style={styles.flashText}>Flash</h1>
 
          </div>
          <div className="text-center relative left-20">
            <h1 className="text-4xl font-normal mb-2">Your</h1>
            <h2 className="text-4xl font-normal mb-2">All Service</h2>
            <h3 className="text-3xl font-normal" style={{ color: styles.greenPrimary }}>In one field....</h3>
          </div>
        </div>
        <img src={loginImage} alt="Login illustration" className="w-full h-full object-cover" />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-50 p-8 flex flex-col justify-center items-center">
        <div className="absolute top-4 right-4 text-xs text-gray-500">
          Software Version : 3.1
        </div>

        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-2">Admin Signin</h2>
          <p className="text-center text-gray-600 mb-8">Welcome back login to your panel.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@address.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="6+ characters required"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
              <button 
                type="button" 
                onClick={() => { /* TODO: Implement forgot password functionality */ }}
                className="text-green-500 hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            {loginError && (
              <div className="text-red-500 text-sm mb-4">
                {loginError}
              </div>
            )}
            
            {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} transition-colors flex justify-center items-center`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : 'Login'}
            </button>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Login;
