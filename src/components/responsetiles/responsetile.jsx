import './responsetiles.css';

export default function ResponseTile({ title, description, price, store, onViewDetails, isFavorited, onToggleFavorite, rating, reviews }) {
  return (
    <div className="response-tile">
      <div className="tile-top">
        <div className="tile-header">
          <h3 className="tile-title">{title}</h3>
          <button 
            className={`favorite-icon ${isFavorited ? 'favorited' : ''}`}
            onClick={() => onToggleFavorite({ title, description, price, store })}
            title="Add to favorites"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <span className="store-badge">{store}</span>
      </div>
      
      <p className="tile-description">{description}</p>
      
      {rating && (
        <div className="tile-rating">
          <span className="stars">{'⭐'.repeat(Math.floor(rating))}</span>
          <span className="rating-text">{rating} ({reviews || 0} reviews)</span>
        </div>
      )}
      
      <div className="tile-footer">
        <div className="price-section">
          <span className="price-label">Price</span>
          <span className="price-value">${price}</span>
        </div>
        <button className="tile-action" onClick={onViewDetails}>View Details</button>
      </div>
    </div>
  );
}
