import React from 'react';
import { X, MapPin, User, Tag } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    category: string;
    producer: string;
    image: string;
    market: string;
  } | null;
  onContact: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  product,
  onContact 
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-96">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-2">{product.name}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Tag size={16} className="text-[#8B9D83]" />
                  <span>{product.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} className="text-[#8B9D83]" />
                  <span>{product.producer}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-4xl font-bold text-[#D4745F]">R${product.price}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <MapPin size={16} className="text-[#8B9D83]" />
            <span>Disponível em {product.market}</span>
          </div>
          <button
            onClick={onContact}
            className="w-full bg-[#D4745F] text-white py-3 rounded-xl hover:bg-[#c06550] transition-colors font-semibold"
          >
            Contatar Produtor
          </button>
        </div>
      </div>
    </div>
  );
};
