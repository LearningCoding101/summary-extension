import React, { useState } from 'react';
import '../styles/context-menu.css';
import { fetchDataForText } from '../api/api-service';
import SummaryPopup from './summary-popup';

function ContextMenu({ text, onClose }) {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  const handleProcessText = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDataForText(text);
      setSummary(data);
    } catch (err) {
      setError(err.message);
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="context-menu">
      <h4>Options for Selected Text:</h4>
      <p>{text}</p>
      {!summary && (
        <button onClick={handleProcessText} disabled={loading}>
          {loading ? "Processing..." : "Process"}
        </button>
      )}
      {error && <p className="error">Error: {error}</p>}
      
      {summary && <SummaryPopup summary={summary} onClose={() => setSummary(null)} />}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ContextMenu;
