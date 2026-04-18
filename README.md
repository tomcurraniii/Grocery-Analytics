# PriceFind - Price Comparison Website

A modern, responsive price comparison website built with React and Vite. Search for products and compare prices across multiple retailers with an intuitive interface.

## Features

- **Smart Search Bar** - Enter product names and search across retailers
- **Response Tiles** - Display up to 3 product listings with pricing and store information
- **Live Price Comparison** - Sticky sidebar showing sorted price comparisons across stores
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern Aesthetic** - Dark theme with cyan accent colors and smooth animations

## Project Structure

```
my-website/
├── src/
│   ├── components/
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   ├── ResponseTiles/
│   │   │   ├── ResponseTile.jsx
│   │   │   ├── ResponseTileGrid.jsx
│   │   │   └── ResponseTiles.css
│   │   ├── PricingList/
│   │   │   ├── PricingList.jsx
│   │   │   ├── PricingCard.jsx
│   │   │   └── Pricing.css
│   │   └── Layout/
│   │       └── Header.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd my-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Key Components

#### SearchBar
Handles user input and triggers search functionality. Features include:
- Text input with placeholder
- Search icon button
- Form submission handling
- Visual feedback on focus

#### ResponseTiles
Displays product results in a 3-column grid with:
- Product title and store badge
- Description
- Price display
- "View Deal" action button
- Hover animations

#### PricingList
Sticky sidebar showing:
- Store comparison cards
- Subtotal, tax, and total calculations
- Sorted by price (lowest first)
- Savings indicator showing max savings
- Responsive behavior on smaller screens

## Styling

The site uses a sophisticated design system with:

- **Color Palette**:
  - Primary: `#1a1a2e` (dark blue)
  - Accent: `#00d4ff` (cyan)
  - Background: `#0f0f1e` (near black)

- **Typography**:
  - Display: `Inter Tight` (bold, headlines)
  - Body: `Inter` (readable, content)

- **Spacing & Radius**: Consistent system using CSS variables
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Layered depth with subtle shadows

## Customization

### Adding a New Store

To add pricing data from a new store, modify the mock data in `src/pages/Home.jsx`:

```javascript
const generateComparisons = (query) => {
  return [
    // Add new store objects here
    {
      store: 'New Store Name',
      items: 3,
      totalPrice: 29.99,
    },
  ];
};
```

### Changing Colors

Edit the CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-primary: #1a1a2e;
  --color-accent: #00d4ff;
  /* ... more variables ... */
}
```

### Modifying Grid Layout

The response tiles use CSS Grid. Change in `src/components/ResponseTiles/ResponseTiles.css`:

```css
.tile-grid {
  grid-template-columns: repeat(3, 1fr); /* Change 3 to desired column count */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle with Vite
- Lazy loading for components
- CSS animations use GPU acceleration
- Responsive images ready for enhancement

## Future Enhancements

- Real API integration with retailers
- User authentication and saved searches
- Advanced filtering and sorting
- Product reviews and ratings
- Multi-product comparison
- Shopping cart integration
- Local storage for user preferences

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue in the repository or contact the development team.
