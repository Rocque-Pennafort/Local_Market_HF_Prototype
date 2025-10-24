import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onFilterClick: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  onFilterClick,
  placeholder = "Search markets, products, or producers..." 
}) => {
  return (
    <div className="relative flex items-center gap-3">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4745F] focus:outline-none transition-colors text-[#2C2C2C]"
          aria-label="Search"
        />
      </div>
      <button
        onClick={onFilterClick}
        className="bg-[#8B9D83] text-white p-3 rounded-xl hover:bg-[#7a8a74] transition-colors"
        aria-label="Open filters"
      >
        <SlidersHorizontal size={20} />
      </button>
    </div>
  );
};
