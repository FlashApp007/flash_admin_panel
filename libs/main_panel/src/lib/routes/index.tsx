import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/layout/Dashboard';
import Users from '../screens/Users';
import Settings from '../screens/Settings';
import NotFoundPage from '../components/layout/NotFoundPage';
import Promotions from '../screens/Promotions';
import Categories from '../screens/Categories';
import Delivery from '../screens/Delivery';
const MainPanelRoutes = () => {
  return (
    <Routes>
      {/* Protected routes */}
      <Route path="/" element={<Dashboard />} />
      
      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Orders */}
      <Route path="/orders" element={<div>All Orders</div>}>
        <Route index element={<div>All Orders</div>} />
        <Route path="new" element={<div>New Orders</div>} />
        <Route path="processing" element={<div>Processing Orders</div>} />
        <Route path="delivered" element={<div>Delivered Orders</div>} />
        <Route path="cancelled" element={<div>Cancelled Orders</div>} />
        <Route path="returned" element={<div>Returned Orders</div>} />
      </Route>
      
      {/* Dispatch */}
      <Route path="/dispatch" element={<div>Dispatch Dashboard</div>}>
        <Route index element={<div>Dispatch Dashboard</div>} />
        <Route path="item1" element={<div>Dispatch Item 1</div>} />
        <Route path="item2" element={<div>Dispatch Item 2</div>} />
        <Route path="item3" element={<div>Dispatch Item 3</div>} />
        <Route path="item4" element={<div>Dispatch Item 4</div>} />
        <Route path="item5" element={<div>Dispatch Item 5</div>} />
      </Route>
      
      {/* Promotion Management */}
      <Route path="/promotions" element={<Promotions />} />
      
      {/* Product Management */}
      <Route path="/categories" element={<Categories />} />
      
      {/* Delivery Management */}
      <Route path="/delivery" element={<Delivery />} />
      
      {/* User Management */}
      <Route path="/users" element={<Users />} />
      
      {/* Settings */}
      <Route path="/settings" element={<Settings />} />
      
      {/* 404 - Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainPanelRoutes;
