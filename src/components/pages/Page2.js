import React, { useState } from 'react';
import { personTypes, severityLevels } from '../../utils/constants';
import { validatePage2 } from '../../utils/validation';

const Page2 = ({ 
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
    const isValid = validatePage2(formData, setErrors, setShowValidation);
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
        <h2 className="section-title">INJURED PERSON</h2>
        
        <div className="question">
          <h4 className="question-title required">5. Name</h4>
          <input
            type="text"
            className={`text-input ${errors.injured_name ? 'error' : ''}`}
            value={formData.injured_name || ''}
            onChange={(e) => handleInputChange('injured_name', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.injured_name && <div className="error-message show">{errors.injured_name}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">6. Nationality</h4>
          <input
            type="text"
            className={`text-input ${errors.nationality ? 'error' : ''}`}
            value={formData.nationality || ''}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.nationality && <div className="error-message show">{errors.nationality}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">7. Address</h4>
          <textarea
            className={`text-input ${errors.address ? 'error' : ''}`}
            value={formData.address || ''}
            onChange={(e) => handleInputChange('address', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.address && <div className="error-message show">{errors.address}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">8. The person working under</h4>
          <div className="radio-group">
            {personTypes.map(type => (
              <label key={type.value} className="radio-option">
                <input
                  type="radio"
                  name="person_type"
                  value={type.value}
                  checked={formData.person_type === type.value}
                  onChange={(e) => handleInputChange('person_type', e.target.value)}
                />
                {type.label}
              </label>
            ))}
          </div>
          {errors.person_type && <div className="error-message show">{errors.person_type}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">9. Type of injury</h4>
          <input
            type="text"
            className={`text-input ${errors.injury_type ? 'error' : ''}`}
            value={formData.injury_type || ''}
            onChange={(e) => handleInputChange('injury_type', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.injury_type && <div className="error-message show">{errors.injury_type}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">10. Part of Body</h4>
          <input
            type="text"
            className={`text-input ${errors.body_part ? 'error' : ''}`}
            value={formData.body_part || ''}
            onChange={(e) => handleInputChange('body_part', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.body_part && <div className="error-message show">{errors.body_part}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">11. Cause of Injury</h4>
          <textarea
            className={`text-input ${errors.injury_cause ? 'error' : ''}`}
            value={formData.injury_cause || ''}
            onChange={(e) => handleInputChange('injury_cause', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.injury_cause && <div className="error-message show">{errors.injury_cause}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">12. Occurred Date of Incident</h4>
          <input
            type="date"
            className={`text-input ${errors.occurred_date ? 'error' : ''}`}
            value={formData.occurred_date || ''}
            onChange={(e) => handleInputChange('occurred_date', e.target.value)}
          />
          {errors.occurred_date && <div className="error-message show">{errors.occurred_date}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">13. Occurred Time of Incident</h4>
          <input
            type="time"
            className={`text-input ${errors.occurred_time ? 'error' : ''}`}
            value={formData.occurred_time || ''}
            onChange={(e) => handleInputChange('occurred_time', e.target.value)}
          />
          {errors.occurred_time && <div className="error-message show">{errors.occurred_time}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">14. Severity</h4>
          <div className="radio-group">
            {severityLevels.map(level => (
              <label key={level.value} className="radio-option">
                <input
                  type="radio"
                  name="severity"
                  value={level.value}
                  checked={formData.severity === level.value}
                  onChange={(e) => handleInputChange('severity', e.target.value)}
                />
                {level.label}
              </label>
            ))}
          </div>
          {errors.severity && <div className="error-message show">{errors.severity}</div>}
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

export default Page2;