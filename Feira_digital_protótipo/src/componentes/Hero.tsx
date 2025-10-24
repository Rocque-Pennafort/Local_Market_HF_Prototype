import React from 'react';
import { MapPin, Search } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src="https://d64gsuwffb70l.cloudfront.net/68f133e78efc59dbe222f33f_1760637984457_ed43ccda.webp"
        alt="Local farmers market"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Descubra Artesãos Locais
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Conecte-se com agricultores, artesãos e artistas da sua comunidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onExploreClick}
              className="bg-[#D4745F] text-white px-8 py-4 rounded-xl hover:bg-[#c06550] transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              aria-label="Explorar feiras"
            >
              <MapPin size={24} />
              Explorar Feiras
            </button>
            <button
              onClick={onExploreClick}
              className="bg-white text-[#2C2C2C] px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              aria-label="Navegar produtos"
            >
              <Search size={24} />
              Navegar Produtos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
