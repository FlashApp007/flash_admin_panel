import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/layout/Dashboard';
import Users from '../screens/Users';
import Settings from '../screens/Settings';
import NotFoundPage from '../components/layout/NotFoundPage';
import Promotions from '../screens/Promotions';
import Categories from '../screens/Categories';
import Delivery from '../screens/Delivery';
import WithdrawTransaction from '../screens/WithdrawTransaction';
import StoreDisbursement from '../screens/StoreDisbursement';
import DeliverymanDisbursement from '../screens/DeliverymanDisbursement';
import DisbursementDetails from '../screens/DisbursementDetails';
import BusinessInformation from '../components/second_screens/businessinformation/BusinessInformation';
import ZoneSetup from '../components/second_screens/zonesetup/ZoneSetup';
import Gallery from '../components/second_screens/gallery/Gallery';
import AddBusinessModule from '../components/second_screens/modulesetup/AddBusinessModule';
import BusinessModuleList from '../components/second_screens/modulesetup/BusinessModuleList';
import ReactSiteSetup from '../components/second_screens/React_site/ReactSiteSetup';
import ParcelOrders from '../components/first_screens/orders/all/ParcelOrders';
import PendingOrders from '../components/first_screens/orders/pending/ParcelOrdersAlt';
import AcceptedOrders from '../components/first_screens/orders/accepted/ParcelOrdersAlt';
import ProcessingOrders from '../components/first_screens/orders/processing/ParcelOrdersAlt';
import OnTheWayOrders from '../components/first_screens/orders/orderontheway/ParcelOrdersAlt';
import DeliveredOrders from '../components/first_screens/orders/delivered/ParcelOrdersAlt';
import CanceledOrders from '../components/first_screens/orders/canclled/ParcelOrdersAlt';
import PaymentFailedOrders from '../components/first_screens/orders/paymentfailed/ParcelOrdersAlt';
import OfflinePaymentsOrders from '../components/first_screens/orders/offlinepayment/ParcelOrdersAlt';
import DeliverymanOrders from '../components/first_screens/dispatch/unassignedorders/DeliverymanOrders';
import OngoingOrders from '../components/first_screens/dispatch/ongingorders/OngoingOrders';
import PromotionalBanners from '../components/first_screens/promotionalbanners/PromotionalBanners';
import ParcelCategory from '../components/first_screens/categorysetup/ParcelCategory';
import ParcelSettings from '../components/first_screens/deliverysetup/ParcelSettings';
import SubscriptionSettings from '../components/second_screens/subscription_management/Settings';
import SubscriptionPackageList2 from '../components/second_screens/subscription_management/SubscriptionPackageList2';
import SubscribedStoresList from '../components/second_screens/subscription_management/SubscribedStoreList';
import SocialMediaSettings from '../components/second_screens/social&media/SocialMediaSettings/SocialMediaSettings';
import AboutUs from '../components/second_screens/social&media/businesspages/AboutUs';
import ShippingPolicy from '../components/second_screens/social&media/businesspages/ShippingPolicy';
import TermsandCondition from '../components/second_screens/social&media/businesspages/TermsandCondition';
import PrivacyPolicy from '../components/second_screens/social&media/businesspages/PrivacyPolicy';
import RefundPolicy from '../components/second_screens/social&media/businesspages/RefundPolicy';
import CancelationPolicy from '../components/second_screens/social&media/businesspages/CancelationPolicy';
import AdminLandingPage from '../components/second_screens/social&media/SocialMediaSettings/AdminLandingPage';
import OfflinePaymentMethodSetup from '../components/second_screens/3rdparty/oflinepayment/OfflinePaymentMethodSetup';
import Firebase from '../components/second_screens/3rdparty/firebase/Firebase';
import RentalModule from '../components/second_screens/emailsetup/rentalmodules/admin_mail_template/RentalModule';
import DispatchOverview from '../components/thrid_screens/dashboard/DispatchOverview';
import OngoingOrdersFull from '../components/thrid_screens/food/ongoingorders/OngoingOrdersFull';
import SearchingDeliverymenOrdersFull from '../components/thrid_screens/food/unassignedorders/SearchingDeliverymenOrdersFull';
const MainPanelRoutes = () => {
  return (
    <Routes>
      {/* Protected routes */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Orders */}
      <Route path="/orders/all" element={<ParcelOrders />} />
      <Route path="/orders/pending" element={<PendingOrders />} />
      <Route path="/orders/accepted" element={<AcceptedOrders />} />
      <Route path="/orders/processing" element={<ProcessingOrders />} />
      <Route path="/orders/on-the-way" element={<OnTheWayOrders />} />
      <Route path="/orders/delivered" element={<DeliveredOrders />} />
      <Route path="/orders/canceled" element={<CanceledOrders />} />
      <Route path="/orders/payment-failed" element={<PaymentFailedOrders />} />
      <Route path="/orders/offline-payments" element={<OfflinePaymentsOrders />} />

      {/* Dispatch */}
      <Route path="/dispatch/unassigned" element={<DeliverymanOrders />} />
      <Route path="/dispatch/ongoing" element={<OngoingOrders />} />

      {/* Promotion Management */}
      <Route path="/promotions" element={<PromotionalBanners/>} />

      {/* Product Management */}
      <Route path="/categories" element={<ParcelCategory/>} />

      {/* Delivery Management */}
      <Route path="/delivery" element={<ParcelSettings/>} />

      {/* User Management */}
      <Route path="/users" element={<div>Demo: Users</div>} />

      {/* Transactions & Reports (Navbar) */}
      <Route path="/transactions" element={<div>Demo: Transactions & Reports</div>} />
      <Route path="/transactions/withdraw" element={<WithdrawTransaction />} />
      <Route path="/disbursement" element={<StoreDisbursement />} />
      <Route path="/deliveryman-disbursement" element={<DeliverymanDisbursement />} />
      <Route path="/disbursement-details" element={<DisbursementDetails />} />

      {/* Dispatch Management (Navbar) */}
      <Route path="/dispatch" element={<div>Demo: Dispatch Management</div>} />

      {/* Settings: Business Management */}
      <Route path="/settings/module-setup/add-business-module" element={<AddBusinessModule />} />
      <Route path="/settings/module-setup/modules" element={<BusinessModuleList />} />
      <Route path="/settings/subscription-management/subscription-package" element={<SubscriptionPackageList2 />} />
      <Route path="/settings/subscription-management/subscriber-list" element={<SubscribedStoresList />} />
      <Route path="/settings/subscription-management/settings" element={<SubscriptionSettings />} />
      <Route path="/settings/pages-social-media/social-media" element={<SocialMediaSettings />} />
      <Route path="/settings/pages-social-media/admin-landing-page" element={<AdminLandingPage />} />
      <Route path="/settings/pages-social-media/react-landing-page" element={<div>Demo: React Landing Page</div>} />
      <Route path="/settings/pages-social-media/flutter-landing-page" element={<div>Demo: Flutter Landing Page</div>} />
      <Route path="/settings/pages-social-media/business-pages/terms-and-condition" element={<TermsandCondition />} />
      <Route path="/settings/pages-social-media/business-pages/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/settings/pages-social-media/business-pages/about-us" element={<AboutUs />} />
      <Route path="/settings/pages-social-media/business-pages/refund-policy" element={<RefundPolicy />} />
      <Route path="/settings/pages-social-media/business-pages/cancelation-policy" element={<CancelationPolicy />} />
      <Route path="/settings/pages-social-media/business-pages/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/settings/zone-setup" element={<ZoneSetup/>} />
      <Route path="/settings/business-settings" element={<BusinessInformation />} />
      <Route path="/settings/gallery" element={<Gallery/>} />

      {/* Settings: System Management */}
      <Route path="/settings/third-party-config/third-party" element={<div>Demo: 3rd Party</div>} />
      <Route path="/settings/third-party-config/firebase-notification" element={<Firebase/>} />
      <Route path="/settings/third-party-config/offline-payment-setup" element={<OfflinePaymentMethodSetup/>} />
      <Route path="/settings/email-setup/all-modules" element={<div>Demo: Email Setup - All Modules</div>} />
      <Route path="/settings/email-setup/rental-module" element={<RentalModule/>} />
      <Route path="/settings/notification-setup/all-modules" element={<div>Demo: Notification Setup - All Module</div>} />
      <Route path="/settings/notification-setup/rental-module" element={<div>Demo: Notification Setup - Rental Module</div>} />
      <Route path="/settings/login-setup" element={<div>Demo: Login Setup</div>} />
      <Route path="/settings/react-site" element={<ReactSiteSetup/>} />
      <Route path="/settings/app-settings" element={<div>Demo: App Settings</div>} />
      <Route path="/settings/clean-database" element={<div>Demo: Clean Database</div>} />
      <Route path="/settings/system-addons" element={<div>Demo: System Addons</div>} />

      {/* Dispatch routes*/}
      <Route path="/dispatch/dashboard" element={<DispatchOverview/>} />
      <Route path="/dispatch/unassigned" element={<SearchingDeliverymenOrdersFull/>} />
      <Route path="/dispatch/ongoing" element={<OngoingOrdersFull/>} />

      {/* Fallback for settings root */}
      <Route path="/settings" element={<div>Demo: Settings Home</div>} />

      {/* 404 - Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainPanelRoutes;
