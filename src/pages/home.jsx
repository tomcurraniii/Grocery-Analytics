import { useState } from 'react';
import Header from '../components/Layout/Header';
import SearchBar from '../components/searchbar/searchbar';
import ResponseTileGrid from '../components/responsetiles/responsetilegrid';
import PricingList from '../components/pricinglist/pricinglist';

// Mock data generator
const generateMockResults = (query) => {
  const stores = ['Market Basket', 'Whole Foods', 'Stop & Shop'];
  const products = [
    {
      title: query,
      description: 'High quality product with great reviews',
      price: (Math.random() * 20 + 5).toFixed(2),
      store: stores[0],
    },
    {
      title: query,
      description: 'Organic variant, farm-fresh selection',
      price: (Math.random() * 20 + 8).toFixed(2),
      store: stores[1],
    },
    {
      title: query,
      description: 'Budget-friendly option, best value',
      price: (Math.random() * 20 + 3).toFixed(2),
      store: stores[2],
    },
  ];
  return products;
};

const generateComparisons = (query) => {
  return [
    {
      store: 'Market Basket',
      items: 3,
      totalPrice: 32.47,
    },
    {
      store: 'Whole Foods',
      items: 3,
      totalPrice: 45.99,
    },
    {
      store: 'Stop & Shop',
      items: 3,
      totalPrice: 38.22,
    },
  ];
};

export default function Home() {
  const [results, setResults] = useState([]);
  const [comparisons, setComparisons] = useState([]);
  const [favorites, setFavorites] = useState([]);  

  const isFavorited = (item) => favorites.some(f => f.title === item.title && f.store === item.store);
  const handleToggleFavorite = (item) => {
    setFavorites(prev =>
      isFavorited(item) ? prev.filter(f => !(f.title === item.title && f.store === item.store)) : [...prev, item]
    );
  };
  const handleViewDetails = (result) => {
    console.log('View details:', result);
  };

  const handleSearch = (query) => {
    const newResults = generateMockResults(query);
    const newComparisons = generateComparisons(query);
    setResults(newResults);
    setComparisons(newComparisons);
  };

  return (
    <div className="home-layout">
      <Header />
      <div className="main-content">
        <div className="content-left">
          <SearchBar onSearch={handleSearch} />
          <ResponseTileGrid
            results={results}
            onViewDetails={handleViewDetails}        
            isFavorited={isFavorited}                
            onToggleFavorite={handleToggleFavorite}  
          />
        </div>
        <PricingList comparisons={comparisons} />
      </div>
    </div>
  );
}
