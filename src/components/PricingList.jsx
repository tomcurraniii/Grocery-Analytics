// src/components/PricingList.jsx
import './PricingList.css'

function PricingCard({ plan, featured }) {
  return (
    <div className={`pricing-card ${featured ? 'featured' : ''}`}>
      {featured && <div className="badge">POPULAR</div>}
      <h3>{plan.name}</h3>
      <div className="price">${plan.price}</div>
      <p className="period">/month</p>
      <ul className="features">
        {plan.features.map((feature, idx) => (
          <li key={idx}>
            <span className="check">✓</span> {feature}
          </li>
        ))}
      </ul>
      <button className={`plan-btn ${featured ? 'featured' : ''}`}>Get Started</button>
    </div>
  )
}

function PricingList({ plans }) {
  return (
    <div className="pricing-container">
      {plans.map((plan, idx) => (
        <PricingCard key={plan.id} plan={plan} featured={idx === 1} />
      ))}
    </div>
  )
}

export default PricingList
