import React, { useState } from 'react';
import { validatePage9 } from '../../utils/validation';

const Page9 = ({ 
  formData, 
  updateFormData, 
  prevPage, 
  loading, 
  currentPage, 
  totalPages, 
  progressPercentage,
  onSubmit 
}) => {
  const [errors, setErrors] = useState({});
  const [showValidation, setShowValidation] = useState(false);

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = () => {
    const isValid = validatePage9(formData, setErrors, setShowValidation);
    if (isValid) {
      onSubmit();
    }
  };

  return (
    <div className="form-page active">
      {showValidation && (
        <div className="validation-message show">
          All required questions need to be completed before submitting the form.
        </div>
      )}

      <div className="form-section">
        <div className="question">
          <h4 className="question-title required">39. Approved</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="approved"
                value="yes"
                checked={formData.approved === 'yes'}
                onChange={(e) => handleInputChange('approved', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="approved"
                value="no"
                checked={formData.approved === 'no'}
                onChange={(e) => handleInputChange('approved', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.approved && <div className="error-message show">{errors.approved}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">40. File for reference</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="file_reference"
                value="yes"
                checked={formData.file_reference === 'yes'}
                onChange={(e) => handleInputChange('file_reference', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="file_reference"
                value="no"
                checked={formData.file_reference === 'no'}
                onChange={(e) => handleInputChange('file_reference', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.file_reference && <div className="error-message show">{errors.file_reference}</div>}
        </div>
      </div>

      {/* Navigation Section with Back, Submit buttons and Progress */}
      <div className="navigation-with-progress">
        <div className="nav-buttons">
          <button type="button" className="nav-btn" onClick={prevPage}>
            Back
          </button>
          <button 
            type="button" 
            className="submit-btn" 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
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
      </div>
    </div>
  );
};

export default Page9;