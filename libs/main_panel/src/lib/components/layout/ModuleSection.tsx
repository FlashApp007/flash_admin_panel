import React, { useState, ReactNode } from 'react';
import { FaShoppingBasket, FaMedkit, FaShoppingBag, FaHamburger, FaBox, FaCar, FaPlus } from 'react-icons/fa';

interface ModuleSectionProps {
  onModuleSelect: (moduleId: number, moduleName: string, moduleIcon: ReactNode) => void;
  onShowAddBusinessModule?: () => void;
}

const ModuleSection = ({ onModuleSelect, onShowAddBusinessModule }: ModuleSectionProps) => {
  const [activeModule, setActiveModule] = useState(1);

  const modules = [
    { id: 1, name: 'Grocery', icon: <FaShoppingBasket size={24} />, color: 'bg-white' },
    { id: 2, name: 'Pharmacy', icon: <FaMedkit size={24} />, color: 'bg-white' },
    { id: 3, name: 'Shop', icon: <FaShoppingBag size={24} />, color: 'bg-white' },
    { id: 4, name: 'Food', icon: <FaHamburger size={24} />, color: 'bg-white' },
    { id: 5, name: 'Parcel', icon: <FaBox size={24} />, color: 'bg-white' },
    { id: 6, name: 'Rental', icon: <FaCar size={24} />, color: 'bg-white' },
    { id: 7, name: 'Add More', icon: <FaPlus size={24} />, color: 'bg-white' },
  ];

  const handleModuleClick = (id: number, name: string, icon: ReactNode) => {
    if (name === 'Add More' && onShowAddBusinessModule) {
      onShowAddBusinessModule();
      return;
    }
    setActiveModule(id);
    onModuleSelect(id, name.toLowerCase(), icon);
  };



  return (
    <div className="p-4 rounded-lg shadow-md w-[320px] absolute right-10 top-full mt-1 z-50 bg-white ">
      <div className="mb-6">
        <h2 className="text-xl font-medium text-gray-800">Modules Section</h2>
        <p className="text-sm text-cyan-500">
          Select Module & Monitor
          <br />
          your business module wise
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {modules.map((module) => (
          <div
            key={module.id}
            className={`p-2 rounded-lg border w-[90px] h-[90px] ${
              module.id === activeModule ? 'bg-[#005454] border-emerald-700' : 'bg-white border-gray-200'
            } cursor-pointer hover:shadow-md transition-all duration-300`}
            onClick={() => handleModuleClick(module.id, module.name, module.icon)}
          >
            <div className="flex flex-col items-center justify-center">
              <div
                className={`  w-12 h-12 rounded-lg flex items-center justify-center mb-2`}
              >
                <span className={module.id === activeModule ? 'text-white' : 'text-emerald-600'}>
                  {module.icon}
                </span>
              </div>
              <span className={`text-sm ${module.id === activeModule ? 'text-white' : 'text-gray-600'}`}>
                {module.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleSection;
