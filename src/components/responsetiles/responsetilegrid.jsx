import ResponseTile from './ResponseTile';

export default function ResponseTileGrid({ results, onViewDetails, isFavorited, onToggleFavorite }) {
  if (results.length === 0) {
    return (
      <div className="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <h3>Start Searching</h3>
        <p>Enter a product name above to see prices from nearby retailers</p>
      </div>
    );
  }

  return (
    <div className="tile-grid">
      {results.map((result, index) => (
        <ResponseTile
          key={index}
          title={result.title}
          description={result.description}
          price={result.price}
          store={result.store}
          rating={result.rating}
          reviews={result.reviews}
          onViewDetails={() => onViewDetails(result)}
          isFavorited={isFavorited(result)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
