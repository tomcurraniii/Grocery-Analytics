import PricingCard from './PricingCard';
import './Pricing.css';

export default function PricingList({ comparisons }) {
  if (comparisons.length === 0) {
    return (
      <aside className="pricing-list">
        <div className="pricing-header">
          <h2>Price Comparison</h2>
          <span className="comparison-badge">0 stores</span>
        </div>
        <div className="pricing-empty">
          <p>Search for a product to compare prices across retailers</p>
        </div>
      </aside>
    );
  }

  // Sort by price (lowest first)
  const sorted = [...comparisons].sort((a, b) => a.totalPrice - b.totalPrice);

  return (
    <aside className="pricing-list">
      <div className="pricing-header">
        <h2>Price Comparison</h2>
        <span className="comparison-badge">{comparisons.length} stores</span>
      </div>
      
      <div className="pricing-cards">
        {sorted.map((comparison, index) => (
          <PricingCard
            key={index}
            store={comparison.store}
            items={comparison.items}
            totalPrice={comparison.totalPrice}
          />
        ))}
      </div>
      
      <div className="pricing-savings">
        <div className="savings-badge">
          <span>Save up to</span>
          <span className="savings-amount">
            ${(sorted[sorted.length - 1].totalPrice - sorted[0].totalPrice).toFixed(2)}
          </span>
        </div>
      </div>
    </aside>
  );
}
