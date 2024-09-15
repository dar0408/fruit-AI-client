import React, { useEffect, useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch FAQs from backend
    fetch('https://fruit-ai-server.onrender.com/api/faqs')
      .then(response => response.json())
      .then(data => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching FAQs');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="faq-container">
      <h2>FAQ Section</h2>
      <div className="faq-list">
        {faqs.length === 0 ? (
          <p>No FAQs available.</p>
        ) : (
          faqs.map(faq => (
            <div key={faq._id} className="faq-card">
              <img src="tangerine.jpg" alt="Tangerine" className="faq-image" />
              <div className="faq-info">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FAQ;
