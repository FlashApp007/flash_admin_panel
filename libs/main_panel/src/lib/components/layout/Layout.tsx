import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Banner from './Banner';
import AddBusinessModule from './AddBusinessModule';

interface LayoutProps {
  children?: ReactNode;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const [showSettingsSections, setShowSettingsSections] = React.useState(true);
  const [showAddBusinessModule, setShowAddBusinessModule] = React.useState(false);

  // Handler to be called from ModuleSection when Add More is clicked
  // Now passed directly as a prop below
  const handleShowAddBusinessModule = () => setShowAddBusinessModule(true);
  const handleCloseAddBusinessModule = () => setShowAddBusinessModule(false);

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
          <Navbar onLogout={onLogout} onSettingsToggle={handleSettingsToggle} onShowAddBusinessModule={handleShowAddBusinessModule} />

          {/* Main content area */}
          <main className="p-4">
            {showAddBusinessModule ? (
              <div>
                <button
                  className="mb-4 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-gray-700"
                  onClick={handleCloseAddBusinessModule}
                >
                  ← Back to Modules
                </button>
                <AddBusinessModule />
              </div>
            ) : (
              children
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
