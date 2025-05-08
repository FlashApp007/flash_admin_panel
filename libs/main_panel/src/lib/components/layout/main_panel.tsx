import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import styles from '../../main_panel.module.css';
import Layout from './Layout';
import Login from './Login';
import MainPanelRoutes from '../../routes';

export function MainPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if user is authenticated on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    
    // Redirect to login if not authenticated
    if (!authStatus && window.location.pathname !== '/login') {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // Handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login', { replace: true });
  };

  if (!isAuthenticated) {
    return (
      <div className={styles['container']}>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
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
