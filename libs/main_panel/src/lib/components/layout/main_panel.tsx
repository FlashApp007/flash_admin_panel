import { useEffect } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../main_panel.module.css';
import Layout from './Layout';
import Login from './Login';
import MainPanelRoutes from '../../routes';

export function MainPanel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Define the auth state structure
  interface AuthState {
    isAuthenticated: boolean;
    user: object | null;
    loading: boolean;
    error: string | null;
  }
  
  interface RootState {
    auth: AuthState;
  }
  
  // Get auth state from Redux store
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  // Check if user is authenticated on initial load
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated && window.location.pathname !== '/login') {
      navigate('/login', { replace: true });
    }
    
    // Redirect to dashboard if authenticated and on login page
    if (isAuthenticated && window.location.pathname === '/login') {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Handle successful login
  const handleLogin = () => {
    // The actual authentication is handled in the Login component
    // This is just for navigation after successful login
    navigate('/dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    // Dispatch logout action to Redux
    dispatch({ type: 'auth/logout' });
    navigate('/login', { replace: true });
  };

  if (loading) {
    return (
      <div className={styles['container']}>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return (
      <div className={styles['container']}>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className={styles['container']}>
      <Layout onLogout={handleLogout}>
        <MainPanelRoutes />
      </Layout>
    </div>
  );
}

export default MainPanel;
