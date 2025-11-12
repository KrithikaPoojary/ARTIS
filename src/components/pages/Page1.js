import React, { useState } from 'react';
import { incidentCategories } from '../../utils/constants';
import { validatePage1 } from '../../utils/validation';

const Page1 = ({ 
  formData, 
  updateFormData, 
  nextPage, 
  prevPage, 
  loading, 
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

  const handleCheckboxChange = (field, value) => {
    const currentValues = formData[field] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    
    updateFormData({ [field]: updatedValues });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    const isValid = validatePage1(formData, setErrors, setShowValidation);
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
        <h2 className="section-title">Details of near miss/ Incident/ Accident</h2>
        
        <div className="question">
          <h4 className="question-title required">1. Location</h4>
          <input
            type="text"
            className={`text-input ${errors.location ? 'error' : ''}`}
            value={formData.location || ''}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.location && <div className="error-message show">{errors.location}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">2. Tick The Appropriate Box - Incident Category</h4>
          <div className="checkbox-group">
            {incidentCategories.map(category => (
              <label key={category.value} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={(formData.incident_category || []).includes(category.value)}
                  onChange={() => handleCheckboxChange('incident_category', category.value)}
                />
                {category.label}
                {category.value === 'other' && (
                  <input
                    type="text"
                    className="other-input"
                    value={formData.incident_category_other || ''}
                    onChange={(e) => handleInputChange('incident_category_other', e.target.value)}
                    placeholder="Specify"
                  />
                )}
              </label>
            ))}
          </div>
          {errors.incident_category && <div className="error-message show">{errors.incident_category}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">3. Reporting Date</h4>
          <input
            type="date"
            className={`text-input ${errors.reporting_date ? 'error' : ''}`}
            value={formData.reporting_date || ''}
            onChange={(e) => handleInputChange('reporting_date', e.target.value)}
          />
          {errors.reporting_date && <div className="error-message show">{errors.reporting_date}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">4. Reporting Time</h4>
          <input
            type="time"
            className={`text-input ${errors.reporting_time ? 'error' : ''}`}
            value={formData.reporting_time || ''}
            onChange={(e) => handleInputChange('reporting_time', e.target.value)}
          />
          {errors.reporting_time && <div className="error-message show">{errors.reporting_time}</div>}
        </div>
      </div>

      {/* Navigation Section with Next Button and Progress */}
      <div className="navigation-with-progress">
        <div className="nav-buttons">
          <button 
            type="button" 
            className="nav-btn" 
            onClick={handleNext}
            disabled={loading}
          >
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

export default Page1;