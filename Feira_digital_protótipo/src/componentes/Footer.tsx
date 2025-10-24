import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4745F] to-[#8B9D83] rounded-lg" />
              <span className="text-2xl font-bold">LocalMarket</span>
            </div>
            <p className="text-gray-400 text-sm">
              Conectando comunidades com artesãos locais, agricultores e artistas desde 2020.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#D4745F] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[#D4745F] transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-[#D4745F] transition-colors">Seja um Vendedor</a></li>
              <li><a href="#" className="hover:text-[#D4745F] transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@localmarket.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>4002-8922</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>cidade exemplo</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-[#D4745F] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-[#D4745F] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-[#D4745F] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 LocalMarket. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
