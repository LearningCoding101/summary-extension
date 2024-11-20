// src/components/SummaryPopup.js
import React from 'react';
import '../styles/summary.css';

function SummaryPopup({ summary, onClose }) {
  return (
    <div className="summary-popup">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Summary</h2>
      <p><strong>Main Idea:</strong> {summary.mainIdea}</p>
      <p><strong>Created At:</strong> {new Date(summary.createdAt).toLocaleDateString()}</p>
      <div className="summary-sections">
        {summary.sections.map((section, index) => (
          <div key={index} className="summary-section">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SummaryPopup;
