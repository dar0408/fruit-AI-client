import React, { useState } from 'react';
import './Chat.css'; // Make sure to import the CSS file

const fruits = [
  { id: 1, name: 'Apple', description: 'A sweet, edible fruit produced by an apple tree.' },
  { id: 2, name: 'Banana', description: 'A long, edible fruit with a soft, starchy center.' },
  { id: 3, name: 'Mango', description: 'A tropical stone fruit, juicy and sweet.' }
];

const Chat = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleSelectFruit = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className="chat-container">
      <h2>Chatbot - Fruit Information</h2>
      <div className="fruit-list">
        {fruits.map((fruit) => (
          <div 
            key={fruit.id} 
            onClick={() => handleSelectFruit(fruit)} 
            className="fruit-card"
          >
            <h3>{fruit.name}</h3>
          </div>
        ))}
      </div>
      {selectedFruit && (
        <div className="fruit-detail">
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
