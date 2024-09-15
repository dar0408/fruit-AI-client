import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Fruit.AI</h1>
      <p className="subtitle">"Be Healthy!"</p>
      <div className="grid-container">
        <Link to="/chat" className="grid-item chat">Chat.</Link>
        <Link to="/translator" className="grid-item translator">Translator</Link>
        <Link to="/faq" className="grid-item faq">FAQs</Link>
        <Link to="/about" className="grid-item about">About</Link>
      </div>
    </div>
  );
};

export default Home;
