import React from 'react';
import { MapPin, Package, Star, MessageCircle } from 'lucide-react';

interface ProducerCardProps {
  producer: {
    id: number;
    name: string;
    specialty: string;
    bio: string;
    image: string;
    location: string;
    products: number;
    rating: number;
    markets: string[];
  };
  onContact: () => void;
  onViewProfile: () => void;
}

export const ProducerCard: React.FC<ProducerCardProps> = ({ producer, onContact, onViewProfile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#D4745F] to-[#8B9D83]">
        <img 
          src={producer.image} 
          alt={producer.name}
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#2C2C2C] mb-1">{producer.name}</h3>
        <p className="text-sm text-[#D4745F] font-medium mb-3">{producer.specialty}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{producer.bio}</p>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#8B9D83]" />
            <span>{producer.location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package size={16} className="text-[#8B9D83]" />
              <span>{producer.products} produtos</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{producer.rating}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onContact}
            className="flex-1 bg-[#D4745F] text-white px-4 py-2 rounded-lg hover:bg-[#c06550] transition-colors flex items-center justify-center gap-2"
            aria-label={`Contatar ${producer.name}`}
          >
            <MessageCircle size={18} />
            <span>Contatar</span>
          </button>
          <button
            onClick={onViewProfile}
            className="flex-1 border-2 border-[#D4745F] text-[#D4745F] px-4 py-2 rounded-lg hover:bg-[#FAF8F5] transition-colors"
            aria-label={`Ver perfil de ${producer.name}`}
          >
            Ver Perfil
          </button>
        </div>
      </div>
    </div>
  );
};
