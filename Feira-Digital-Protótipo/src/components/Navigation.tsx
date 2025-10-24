import React from 'react';
import { Home, ShoppingBag, Users, Heart, Menu } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'markets', label: 'Markets', icon: Menu },
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'producers', label: 'Producers', icon: Users },
    { id: 'favorites', label: 'Favorites', icon: Heart }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4745F] to-[#8B9D83] rounded-lg" />
            <span className="text-2xl font-bold text-[#2C2C2C]">LocalMarket</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    activeTab === item.id
                      ? 'bg-[#D4745F] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label={item.label}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                >
                  <Icon size={20} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg ${
                activeTab === item.id ? 'text-[#D4745F]' : 'text-gray-600'
              }`}
              aria-label={item.label}
            >
              <Icon size={24} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
