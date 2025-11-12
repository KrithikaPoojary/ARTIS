import React, { useState } from 'react';
import { validatePage8 } from '../../utils/validation';

const Page8 = ({ 
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
    const isValid = validatePage8(formData, setErrors, setShowValidation);
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
        <h2 className="section-title">FOR HSE DEPARTMENT ONLY</h2>
        
        <div className="question">
          <h4 className="question-title required">35. Incident form details complete</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="form_complete"
                value="yes"
                checked={formData.form_complete === 'yes'}
                onChange={(e) => handleInputChange('form_complete', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="form_complete"
                value="no"
                checked={formData.form_complete === 'no'}
                onChange={(e) => handleInputChange('form_complete', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.form_complete && <div className="error-message show">{errors.form_complete}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">36. Incident form details insufficient</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="form_insufficient"
                value="yes"
                checked={formData.form_insufficient === 'yes'}
                onChange={(e) => handleInputChange('form_insufficient', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="form_insufficient"
                value="no"
                checked={formData.form_insufficient === 'no'}
                onChange={(e) => handleInputChange('form_insufficient', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.form_insufficient && <div className="error-message show">{errors.form_insufficient}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">37. Incident details signed off and closed</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="form_closed"
                value="yes"
                checked={formData.form_closed === 'yes'}
                onChange={(e) => handleInputChange('form_closed', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="form_closed"
                value="no"
                checked={formData.form_closed === 'no'}
                onChange={(e) => handleInputChange('form_closed', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.form_closed && <div className="error-message show">{errors.form_closed}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">38. Further actions and investigations required</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="further_actions"
                value="yes"
                checked={formData.further_actions === 'yes'}
                onChange={(e) => handleInputChange('further_actions', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="further_actions"
                value="no"
                checked={formData.further_actions === 'no'}
                onChange={(e) => handleInputChange('further_actions', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.further_actions && <div className="error-message show">{errors.further_actions}</div>}
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

export default Page8;