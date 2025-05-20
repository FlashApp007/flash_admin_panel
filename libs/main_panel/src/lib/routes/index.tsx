import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/layout/Dashboard';
import Users from '../screens/Users';
import Settings from '../screens/Settings';
import NotFoundPage from '../components/layout/NotFoundPage';
import Promotions from '../screens/Promotions';
import Categories from '../screens/Categories';
import Delivery from '../screens/Delivery';
import BusinessInformation from '../components/second_screens/businessinformation/BusinessInformation';
import ZoneSetup from '../components/second_screens/zonesetup/ZoneSetup';
import Gallery from '../components/second_screens/gallery/Gallery';
import AddBusinessModule from '../components/layout/AddBusinessModule';
import ReactSiteSetup from '../components/second_screens/React_site/ReactSiteSetup';
const MainPanelRoutes = () => {
  return (
    <Routes>
      {/* Protected routes */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Orders */}
      <Route path="/orders/all" element={<div>Demo: All Orders</div>} />
      <Route path="/orders/pending" element={<div>Demo: Pending Orders</div>} />
      <Route path="/orders/accepted" element={<div>Demo: Accepted Orders</div>} />
      <Route path="/orders/processing" element={<div>Demo: Processing Orders</div>} />
      <Route path="/orders/on-the-way" element={<div>Demo: Order on the Way</div>} />
      <Route path="/orders/delivered" element={<div>Demo: Delivered Orders</div>} />
      <Route path="/orders/canceled" element={<div>Demo: Canceled Orders</div>} />
      <Route path="/orders/payment-failed" element={<div>Demo: Payment Failed Orders</div>} />
      <Route path="/orders/offline-payments" element={<div>Demo: Offline Payments</div>} />

      {/* Dispatch */}
      <Route path="/dispatch/unassigned" element={<div>Demo: Unassigned Orders</div>} />
      <Route path="/dispatch/ongoing" element={<div>Demo: Ongoing Orders</div>} />

      {/* Promotion Management */}
      <Route path="/promotions" element={<div>Demo: Promotional Banners</div>} />

      {/* Product Management */}
      <Route path="/categories" element={<div>Demo: Category Setup</div>} />

      {/* Delivery Management */}
      <Route path="/delivery" element={<div>Demo: Delivery Setup</div>} />

      {/* User Management */}
      <Route path="/users" element={<div>Demo: Users</div>} />

      {/* Transactions & Reports (Navbar) */}
      <Route path="/transactions" element={<div>Demo: Transactions & Reports</div>} />

      {/* Dispatch Management (Navbar) */}
      <Route path="/dispatch" element={<div>Demo: Dispatch Management</div>} />

      {/* Settings: Business Management */}
      <Route path="/settings/module-setup/add-business-module" element={<AddBusinessModule />} />
      <Route path="/settings/module-setup/modules" element={<div>Demo: Modules</div>} />
      <Route path="/settings/subscription-management/subscription-package" element={<div>Demo: Subscription Package</div>} />
      <Route path="/settings/subscription-management/subscriber-list" element={<div>Demo: Subscriber List</div>} />
      <Route path="/settings/subscription-management/settings" element={<div>Demo: Subscription Settings</div>} />
      <Route path="/settings/pages-social-media/social-media" element={<div>Demo: Social Media</div>} />
      <Route path="/settings/pages-social-media/admin-landing-page" element={<div>Demo: Admin Landing Page</div>} />
      <Route path="/settings/pages-social-media/react-landing-page" element={<div>Demo: React Landing Page</div>} />
      <Route path="/settings/pages-social-media/flutter-landing-page" element={<div>Demo: Flutter Landing Page</div>} />
      <Route path="/settings/pages-social-media/business-pages/terms-and-condition" element={<div>Demo: Terms and Condition</div>} />
      <Route path="/settings/pages-social-media/business-pages/privacy-policy" element={<div>Demo: Privacy Policy</div>} />
      <Route path="/settings/pages-social-media/business-pages/about-us" element={<div>Demo: About Us</div>} />
      <Route path="/settings/pages-social-media/business-pages/refund-policy" element={<div>Demo: Refund Policy</div>} />
      <Route path="/settings/pages-social-media/business-pages/cancelation-policy" element={<div>Demo: Cancelation Policy</div>} />
      <Route path="/settings/pages-social-media/business-pages/shipping-policy" element={<div>Demo: Shipping Policy</div>} />
      <Route path="/settings/zone-setup" element={<ZoneSetup/>} />
      <Route path="/settings/business-settings" element={<BusinessInformation />} />
      <Route path="/settings/gallery" element={<Gallery/>} />

      {/* Settings: System Management */}
      <Route path="/settings/third-party-config/third-party" element={<div>Demo: 3rd Party</div>} />
      <Route path="/settings/third-party-config/firebase-notification" element={<div>Demo: Firebase Notification</div>} />
      <Route path="/settings/third-party-config/offline-payment-setup" element={<div>Demo: Offline Payment Setup</div>} />
      <Route path="/settings/email-setup/all-modules" element={<div>Demo: Email Setup - All Modules</div>} />
      <Route path="/settings/email-setup/rental-module" element={<div>Demo: Email Setup - Rental Module</div>} />
      <Route path="/settings/notification-setup/all-modules" element={<div>Demo: Notification Setup - All Module</div>} />
      <Route path="/settings/notification-setup/rental-module" element={<div>Demo: Notification Setup - Rental Module</div>} />
      <Route path="/settings/login-setup" element={<div>Demo: Login Setup</div>} />
      <Route path="/settings/react-site" element={<ReactSiteSetup/>} />
      <Route path="/settings/app-settings" element={<div>Demo: App Settings</div>} />
      <Route path="/settings/clean-database" element={<div>Demo: Clean Database</div>} />
      <Route path="/settings/system-addons" element={<div>Demo: System Addons</div>} />

      {/* Fallback for settings root */}
      <Route path="/settings" element={<div>Demo: Settings Home</div>} />

      {/* 404 - Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainPanelRoutes;
