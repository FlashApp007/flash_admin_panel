import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../screens/Dashboard';
import { Users } from '../screens/Users';
import { Products } from '../screens/Products';
import { Settings } from '../screens/Settings';

export const MainPanelRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/products" element={<Products />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default MainPanelRoutes;
