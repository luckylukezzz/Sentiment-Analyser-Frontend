import React, { useState } from 'react';
import { Input, Button, Card, CardContent, Typography, CircularProgress } from '@mui/material';

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
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          ASIN Search and Process
        </Typography>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={asin}
            onChange={(e) => setAsin(e.target.value)}
            placeholder="Enter ASIN"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || !asin}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Process ASIN'}
          </Button>
        </form>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            Error: {error}
          </Typography>
        )}
        {result && (
          <Typography sx={{ mt: 2 }}>
            Result: {result}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ASINSearchComponent;