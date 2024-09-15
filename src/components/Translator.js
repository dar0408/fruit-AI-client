import React, { useState } from 'react';
import './Translator.css'; // Import the CSS file

const translateText = (text, language) => {
  const translations = {
    hindi: 'यह एक उदाहरण पाठ है।',
    spanish: 'Este es un texto de ejemplo.',
  };
  return translations[language] || text;
};

const Translator = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('hindi');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    const result = translateText(text, language);
    setTranslatedText(result);
  };

  return (
    <div className="translator-container">
      <h2>Translator</h2>
      <textarea
        className="input-text"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <select className="language-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="hindi">Hindi</option>
        <option value="spanish">Spanish</option>
      </select>
      <button className="translate-button" onClick={handleTranslate}>Translate</button>
      <div className="translation-result">
        <h3>Translation:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default Translator;
