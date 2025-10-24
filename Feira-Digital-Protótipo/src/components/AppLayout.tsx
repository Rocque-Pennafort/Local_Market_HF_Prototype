import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { SearchBar } from './SearchBar';
import { MarketCard } from './MarketCard';
import { ProductCard } from './ProductCard';
import { ProducerCard } from './ProducerCard';
import { FilterModal } from './FilterModal';
import { ContactModal } from './ContactModal';
import { ProductDetailModal } from './ProductDetailModal';
import { Footer } from './Footer';
import { markets } from '@/data/marketData';
import { products } from '@/data/productData';
import { producers } from '@/data/producerData';

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [selectedProducer, setSelectedProducer] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleExploreClick = () => {
    setActiveTab('markets');
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.producer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const filteredMarkets = markets.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const favoriteProducts = products.filter(p => favorites.has(p.id));

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'home' && (
        <>
          <Hero onExploreClick={handleExploreClick} />
          <div className="max-w-7xl mx-auto px-4 py-12">
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6">Featured Markets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {markets.slice(0, 3).map(market => (
                  <MarketCard 
                    key={market.id} 
                    market={market} 
                    onClick={() => setActiveTab('markets')}
                  />
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6">Popular Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.slice(0, 8).map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={favorites.has(product.id)}
                    onToggleFavorite={() => toggleFavorite(product.id)}
                    onViewDetails={() => {
                      setSelectedProduct(product);
                      setProductDetailOpen(true);
                    }}
                  />
                ))}
              </div>
            </section>
          </div>
        </>
      )}

      {activeTab === 'markets' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-6">Discover Markets</h1>
          <div className="mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onFilterClick={() => setFilterModalOpen(true)}
              placeholder="Search markets..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map(market => (
              <MarketCard key={market.id} market={market} onClick={() => {}} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-6">Browse Products</h1>
          <div className="mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onFilterClick={() => setFilterModalOpen(true)}
              placeholder="Search products..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.has(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
                onViewDetails={() => {
                  setSelectedProduct(product);
                  setProductDetailOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'producers' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-6">Meet Our Producers</h1>
          <div className="mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onFilterClick={() => setFilterModalOpen(true)}
              placeholder="Search producers..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {producers.map(producer => (
              <ProducerCard
                key={producer.id}
                producer={producer}
                onContact={() => {
                  setSelectedProducer(producer.name);
                  setContactModalOpen(true);
                }}
                onViewProfile={() => {}}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'favorites' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-6">Your Favorites</h1>
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No favorites yet. Start exploring!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={true}
                  onToggleFavorite={() => toggleFavorite(product.id)}
                  onViewDetails={() => {
                    setSelectedProduct(product);
                    setProductDetailOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <Footer />

      <FilterModal
        isOpen={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        recipientName={selectedProducer}
      />

      <ProductDetailModal
        isOpen={productDetailOpen}
        onClose={() => setProductDetailOpen(false)}
        product={selectedProduct}
        onContact={() => {
          setProductDetailOpen(false);
          setSelectedProducer(selectedProduct?.producer || '');
          setContactModalOpen(true);
        }}
      />
    </div>
  );
};

export default AppLayout;
