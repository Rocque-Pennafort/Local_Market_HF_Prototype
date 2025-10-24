import React from 'react';
import { MapPin, Clock, Star, Users } from 'lucide-react';

interface MarketCardProps {
  market: {
    id: number;
    name: string;
    category: string;
    distance: string;
    image: string;
    address: string;
    hours: string;
    rating: number;
    vendors: number;
  };
  onClick: () => void;
}

export const MarketCard: React.FC<MarketCardProps> = ({ market, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
      role="button"
      tabIndex={0}
      aria-label={`View ${market.name}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={market.image} 
          alt={market.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#D4745F]">
          {market.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{market.name}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#8B9D83]" />
            <span>{market.address} • {market.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#8B9D83]" />
            <span>{market.hours}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{market.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Users size={16} />
              <span>{market.vendors} vendors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
