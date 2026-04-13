import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ResponseTileGrid from './components/ResponseTileGrid'
import PricingList from './components/PricingList'
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const mockPrices = [
    {
      id: 1,
      name: 'Basic Plan',
      price: 9.99,
      features: ['View basic prices', 'Single store tracking', 'Email support']
    },
    {
      id: 2,
      name: 'Pro Plan',
      price: 19.99,
      features: ['Advanced analytics', 'Multiple store tracking', 'Priority support', 'Price alerts']
    },
    {
      id: 3,
      name: 'Enterprise Plan',
      price: 49.99,
      features: ['Custom analytics', 'Unlimited stores', '24/7 support', 'API access', 'Dedicated account manager']
    }
  ]

  const mockResults = [
    { id: 1, title: 'Whole Milk (1 gal)', description: 'Compare prices across local stores. Average: $3.49' },
    { id: 2, title: 'Organic Eggs (12 ct)', description: 'Premium options available. Average: $5.99' },
    { id: 3, title: 'Bread (1 loaf)', description: 'Specialty and standard options. Average: $2.99' },
    { id: 4, title: 'Cheese (8 oz)', description: 'Multiple varieties in stock. Average: $4.49' },
    { id: 5, title: 'Chicken Breast (lb)', description: 'Fresh and frozen options. Average: $7.99' },
    { id: 6, title: 'Vegetables', description: 'Seasonal fresh produce. Prices vary by store' }
  ]

  const handleSearch = (query) => {
    if (query.trim()) {
      setSearchResults(mockResults)
      setHasSearched(true)
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>🛒 Grocery Analytics</h1>
        <p>Find the best grocery prices in your area</p>
      </header>

      <main className="main-content">
        <section className="search-section">
          <SearchBar onSearch={handleSearch} />
        </section>

        {hasSearched && (
          <section className="results-section">
            <h2>Search Results</h2>
            <ResponseTileGrid results={searchResults} />
          </section>
        )}

        <section className="pricing-section">
          <h2>Our Plans</h2>
          <p>Choose the perfect plan for your grocery shopping needs</p>
          <PricingList plans={mockPrices} />
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Grocery Analytics. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App