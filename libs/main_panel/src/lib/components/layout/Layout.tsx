import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Banner from './Banner';

interface LayoutProps {
  children?: ReactNode;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const [showSettingsSections, setShowSettingsSections] = React.useState(true);


  // Handler to be called from Navbar when settings is toggled
  const handleSettingsToggle = (open: boolean) => {
    setShowSettingsSections(open);
    // Optionally reset selectedSidebarOption when closing settings
    // No longer need to reset selectedSidebarOption
  
  };

  // Function to reset to default options
  const resetToDefaultOptions = () => {
    setShowSettingsSections(false);
  };



  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner at the top */}
      <Banner />
      <div className="flex flex-1">
        {/* Sidebar fixed on the left */}
        <Sidebar
          showSettingsSections={showSettingsSections}
          resetToDefaultOptions={resetToDefaultOptions}
        />

        {/* Main container for Navbar and MainContent */}
        <div className="flex-1 ml-0 md:ml-64 pt-24">
          {/* Navbar at the top, fixed */}
          <Navbar onLogout={onLogout} onSettingsToggle={handleSettingsToggle} />

          {/* Main content area */}
          <main className="p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
