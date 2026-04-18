export default function PricingCard({ store, items, totalPrice }) {
  return (
    <div className="pricing-card">
      <div className="pricing-card-header">
        <h4 className="pricing-store-name">{store}</h4>
        <span className="pricing-item-count">{items} items</span>
      </div>
      
      <div className="pricing-card-divider"></div>
      
      <div className="pricing-card-body">
        <div className="pricing-row">
          <span>Subtotal</span>
          <span>${(totalPrice * 0.95).toFixed(2)}</span>
        </div>
        <div className="pricing-row">
          <span>Tax (est.)</span>
          <span>${(totalPrice * 0.05).toFixed(2)}</span>
        </div>
      </div>
      
      <div className="pricing-card-divider"></div>
      
      <div className="pricing-card-total">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
