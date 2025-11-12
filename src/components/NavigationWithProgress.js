import React from 'react';

const NavigationWithProgress = ({ currentPage, totalPages, onNext, onPrev, showSubmit, loading }) => {
  const progressPercentage = (currentPage / totalPages) * 100;

  return (
    <div className="navigation-with-progress">
      <div className="nav-buttons">
        {currentPage > 1 && (
          <button type="button" className="nav-btn" onClick={onPrev}>
            Back
          </button>
        )}
        {!showSubmit && (
          <button type="button" className="nav-btn" onClick={onNext}>
            Next
          </button>
        )}
      </div>
      
      <div className="progress-display">
        <div className="progress-info">Page {currentPage} of {totalPages}</div>
        <div className="mini-progress-bar">
          <div 
            className="mini-progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {showSubmit && (
        <div className="nav-buttons">
          <button 
            type="submit" 
            className="submit-btn" 
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavigationWithProgress;