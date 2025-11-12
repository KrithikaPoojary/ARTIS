import React, { useState } from 'react';
import { validatePage4 } from '../../utils/validation';

const Page4 = ({ 
  formData, 
  updateFormData, 
  nextPage, 
  prevPage, 
  currentPage, 
  totalPages, 
  progressPercentage 
}) => {
  const [errors, setErrors] = useState({});
  const [showValidation, setShowValidation] = useState(false);

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    const isValid = validatePage4(formData, setErrors, setShowValidation);
    if (isValid) nextPage();
  };

  return (
    <div className="form-page active">
      {showValidation && (
        <div className="validation-message show">
          All required questions need to be completed before going to next page.
        </div>
      )}

      <div className="form-section">
        <h2 className="section-title">FURTHER DETAILS</h2>
        
        <div className="question">
          <h4 className="question-title required">19. Was first aid given to the injured person on site?</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="first_aid"
                value="yes"
                checked={formData.first_aid === 'yes'}
                onChange={(e) => handleInputChange('first_aid', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="first_aid"
                value="no"
                checked={formData.first_aid === 'no'}
                onChange={(e) => handleInputChange('first_aid', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.first_aid && <div className="error-message show">{errors.first_aid}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">20. To whom on site was the incident first reported?</h4>
          <input
            type="text"
            className={`text-input ${errors.reported_to ? 'error' : ''}`}
            value={formData.reported_to || ''}
            onChange={(e) => handleInputChange('reported_to', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.reported_to && <div className="error-message show">{errors.reported_to}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">21. Were there any witness to the incident?</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="witnesses"
                value="yes"
                checked={formData.witnesses === 'yes'}
                onChange={(e) => handleInputChange('witnesses', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="witnesses"
                value="no"
                checked={formData.witnesses === 'no'}
                onChange={(e) => handleInputChange('witnesses', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.witnesses && <div className="error-message show">{errors.witnesses}</div>}
        </div>
      </div>

      {/* Navigation Section with Back, Next buttons and Progress */}
      <div className="navigation-with-progress">
        <div className="nav-buttons">
          <button type="button" className="nav-btn" onClick={prevPage}>
            Back
          </button>
          <button type="button" className="nav-btn" onClick={handleNext}>
            Next
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

export default Page4;