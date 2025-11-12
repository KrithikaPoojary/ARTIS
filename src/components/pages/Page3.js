import React, { useState } from 'react';
import { natureInjuries, bodyLocations, mechanisms, agencies } from '../../utils/constants';
import { validatePage3 } from '../../utils/validation';

const Page3 = ({ 
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

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handleNext = () => {
    const isValid = validatePage3(formData, setErrors, setShowValidation);
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
        <h2 className="section-title">INCIDENT MATRIX TYPE</h2>
        
        <div className="question">
          <h4 className="question-title required">15. Nature of Injury</h4>
          <div className="checkbox-group">
            {natureInjuries.map(injury => (
              <label key={injury.value} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={(formData.nature_injury || []).includes(injury.value)}
                  onChange={() => handleCheckboxChange('nature_injury', injury.value)}
                />
                {injury.label}
                {injury.value === 'other' && (
                  <input
                    type="text"
                    className="other-input"
                    value={formData.nature_injury_other || ''}
                    onChange={(e) => handleInputChange('nature_injury_other', e.target.value)}
                    placeholder="Specify"
                  />
                )}
              </label>
            ))}
          </div>
          {errors.nature_injury && <div className="error-message show">{errors.nature_injury}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">16. Body Locations</h4>
          <div className="checkbox-group">
            {bodyLocations.map(location => (
              <label key={location.value} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={(formData.body_location || []).includes(location.value)}
                  onChange={() => handleCheckboxChange('body_location', location.value)}
                />
                {location.label}
                {location.value === 'other' && (
                  <input
                    type="text"
                    className="other-input"
                    value={formData.body_location_other || ''}
                    onChange={(e) => handleInputChange('body_location_other', e.target.value)}
                    placeholder="Specify"
                  />
                )}
              </label>
            ))}
          </div>
          {errors.body_location && <div className="error-message show">{errors.body_location}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">17. Mechanism of Injury</h4>
          <div className="checkbox-group">
            {mechanisms.map(mechanism => (
              <label key={mechanism.value} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={(formData.mechanism || []).includes(mechanism.value)}
                  onChange={() => handleCheckboxChange('mechanism', mechanism.value)}
                />
                {mechanism.label}
                {mechanism.value === 'other' && (
                  <input
                    type="text"
                    className="other-input"
                    value={formData.mechanism_other || ''}
                    onChange={(e) => handleInputChange('mechanism_other', e.target.value)}
                    placeholder="Specify"
                  />
                )}
              </label>
            ))}
          </div>
          {errors.mechanism && <div className="error-message show">{errors.mechanism}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">18. Agency of Injury</h4>
          <div className="checkbox-group">
            {agencies.map(agency => (
              <label key={agency.value} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={(formData.agency || []).includes(agency.value)}
                  onChange={() => handleCheckboxChange('agency', agency.value)}
                />
                {agency.label}
                {agency.value === 'other' && (
                  <input
                    type="text"
                    className="other-input"
                    value={formData.agency_other || ''}
                    onChange={(e) => handleInputChange('agency_other', e.target.value)}
                    placeholder="Specify"
                  />
                )}
              </label>
            ))}
          </div>
          {errors.agency && <div className="error-message show">{errors.agency}</div>}
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

export default Page3;