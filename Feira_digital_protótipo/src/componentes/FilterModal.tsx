import React from 'react';
import { X } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange
}) => {
  if (!isOpen) return null;

  const categories = ['Todos', 'Alimentos', 'Artesanato', 'Arte'];
  const categoryMap: { [key: string]: string } = {
    'Todos': 'All',
    'Alimentos': 'Food',
    'Artesanato': 'Crafts',
    'Arte': 'Art'
  };
  const reverseCategoryMap: { [key: string]: string } = {
    'All': 'Todos',
    'Food': 'Alimentos',
    'Crafts': 'Artesanato',
    'Art': 'Arte'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#2C2C2C]">Filtros</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Fechar filtros">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#2C2C2C] mb-3">Categoria</label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(categoryMap[cat])}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    reverseCategoryMap[selectedCategory] === cat
                      ? 'bg-[#D4745F] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2C2C2C] mb-3">
              Faixa de Preço: R${priceRange[0]} - R${priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>

          <button
            onClick={onClose}
            className="w-full bg-[#D4745F] text-white py-3 rounded-xl hover:bg-[#c06550] transition-colors font-semibold"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};
