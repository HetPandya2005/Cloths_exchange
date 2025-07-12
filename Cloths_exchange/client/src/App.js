import TinderCard from 'react-tinder-card';
import { useEffect, useState } from 'react';
import './App.css';

const mockItems = [
  {
    _id: '1',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    brand: 'Zara',
    size: 'M',
    condition: 'Good',
  },
  {
    _id: '2',
    image: 'https://images.unsplash.com/photo-1602810317723-3f9a07e1efba',
    brand: 'Nike',
    size: 'L',
    condition: 'Excellent',
  },
];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mock items for now
    setItems(mockItems);
  }, []);

  const swiped = (direction, itemId) => {
    console.log(`Swiped ${direction} on item ${itemId}`);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Clothing Exchange Swipe</h1>
      <div className="cardContainer">
        {items.map((item) => (
          <TinderCard
            className="swipe"
            key={item._id}
            onSwipe={(dir) => swiped(dir, item._id)}
            preventSwipe={['up', 'down']}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h3>{item.brand} - {item.size}</h3>
              <p>{item.condition}</p>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default App;
