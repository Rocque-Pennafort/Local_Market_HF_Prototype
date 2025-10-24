import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    category: string;
    producer: string;
    image: string;
    market: string;
  };
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onViewDetails: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  isFavorite, 
  onToggleFavorite,
  onViewDetails 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-64 overflow-hidden bg-[#FAF8F5]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-[#FAF8F5] transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={20} 
            className={isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}
          />
        </button>
      </div>
      <div className="p-4">
        <span className="text-xs text-[#8B9D83] font-medium">{product.category}</span>
        <h3 className="text-lg font-bold text-[#2C2C2C] mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">by {product.producer}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#D4745F]">${product.price}</span>
          <button
            onClick={onViewDetails}
            className="bg-[#D4745F] text-white px-4 py-2 rounded-lg hover:bg-[#c06550] transition-colors flex items-center gap-2"
            aria-label={`View details for ${product.name}`}
          >
            <ShoppingBag size={18} />
            <span>View</span>
          </button>
        </div>
      </div>
    </div>
  );
};
