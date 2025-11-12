import React, { useState } from 'react';
import { validatePage6 } from '../../utils/validation';

const Page6 = ({ 
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
    const isValid = validatePage6(formData, setErrors, setShowValidation);
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
        <h2 className="section-title">FOLLOW UP & CLOSE OUT</h2>
        
        <div className="question">
          <h4 className="question-title required">28. Remedial action items implemented?</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="remedial_implemented"
                value="yes"
                checked={formData.remedial_implemented === 'yes'}
                onChange={(e) => handleInputChange('remedial_implemented', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="remedial_implemented"
                value="no"
                checked={formData.remedial_implemented === 'no'}
                onChange={(e) => handleInputChange('remedial_implemented', e.target.value)}
              />
              No
            </label>
          </div>
          {errors.remedial_implemented && <div className="error-message show">{errors.remedial_implemented}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">29. File and approve</h4>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="file_approve"
                value="yes"
                checked={formData.file_approve === 'yes'}
                onChange={(e) => handleInputChange('file_approve', e.target.value)}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="file_approve"
                value="no"
                checked={formData.file_approve === 'no'}
                onChange={(e) => handleInputChange('file_approve', e.target.value)}
              />
              No
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="file_approve"
                value="other"
                checked={formData.file_approve === 'other'}
                onChange={(e) => handleInputChange('file_approve', e.target.value)}
              />
              Other
            </label>
          </div>
          {errors.file_approve && <div className="error-message show">{errors.file_approve}</div>}
        </div>

        <div className="question">
          <h4 className="question-title">30. Give Reasons</h4>
          <textarea
            className="text-input"
            value={formData.reasons_not_implemented || ''}
            onChange={(e) => handleInputChange('reasons_not_implemented', e.target.value)}
            placeholder="Enter your answer"
          />
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

export default Page6;