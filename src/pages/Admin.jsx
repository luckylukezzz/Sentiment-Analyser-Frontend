import React, { useState } from 'react';

const ASINSearchComponent = () => {
  const [asin, setAsin] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/process-reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ asin }),
      });

      if (!response.ok) {
        throw new Error('Failed to process ASIN');
      }

      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>ASIN Search and Process</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={asin}
          onChange={(e) => setAsin(e.target.value)}
          placeholder="Enter ASIN"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button
          type="submit"
          disabled={loading || !asin}
          style={{ width: '100%', padding: '8px', backgroundColor: '#007bff', color: 'white', border: 'none' }}
        >
          {loading ? 'Processing...' : 'Process ASIN'}
        </button>
      </form>
      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>Error: {error}</p>
      )}
      {result && (
        <p style={{ marginTop: '10px' }}>Result: {result}</p>
      )}
    </div>
  );
};

export default ASINSearchComponent;