import React, { useState } from 'react';
import { validatePage5 } from '../../utils/validation';

const Page5 = ({ 
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
    const isValid = validatePage5(formData, setErrors, setShowValidation);
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
        <h2 className="section-title">INCIDENT INVESTIGATION</h2>
        
        <div className="question">
          <h4 className="question-title required">22. What specific instruction were given prior to the incident taking place?</h4>
          <textarea
            className={`text-input ${errors.instructions ? 'error' : ''}`}
            value={formData.instructions || ''}
            onChange={(e) => handleInputChange('instructions', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.instructions && <div className="error-message show">{errors.instructions}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">23. What factor contributed to the incident? (Immediate & basic causes)</h4>
          <textarea
            className={`text-input ${errors.contributing_factors ? 'error' : ''}`}
            value={formData.contributing_factors || ''}
            onChange={(e) => handleInputChange('contributing_factors', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.contributing_factors && <div className="error-message show">{errors.contributing_factors}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">24. Underlying Cause(s) contributing to the incident? (Root Cause)</h4>
          <textarea
            className={`text-input ${errors.root_cause ? 'error' : ''}`}
            value={formData.root_cause || ''}
            onChange={(e) => handleInputChange('root_cause', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.root_cause && <div className="error-message show">{errors.root_cause}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">25. Immediate action plan: What actions have/ are being put in place to prevent re-occurrence?</h4>
          <textarea
            className={`text-input ${errors.immediate_action ? 'error' : ''}`}
            value={formData.immediate_action || ''}
            onChange={(e) => handleInputChange('immediate_action', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.immediate_action && <div className="error-message show">{errors.immediate_action}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">26. Follow-up Action Plan: identify further actions to be completed to eliminate or reduce further re-occurrence</h4>
          <textarea
            className={`text-input ${errors.follow_up_action ? 'error' : ''}`}
            value={formData.follow_up_action || ''}
            onChange={(e) => handleInputChange('follow_up_action', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.follow_up_action && <div className="error-message show">{errors.follow_up_action}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">Responsibility of</h4>
          <input
            type="text"
            className={`text-input ${errors.responsibility ? 'error' : ''}`}
            value={formData.responsibility || ''}
            onChange={(e) => handleInputChange('responsibility', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.responsibility && <div className="error-message show">{errors.responsibility}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">27. Remedial action required</h4>
          <textarea
            className={`text-input ${errors.remedial_action ? 'error' : ''}`}
            value={formData.remedial_action || ''}
            onChange={(e) => handleInputChange('remedial_action', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.remedial_action && <div className="error-message show">{errors.remedial_action}</div>}
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

export default Page5;