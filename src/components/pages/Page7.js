import React, { useState } from 'react';
import { positions, departments } from '../../utils/constants';
import { validatePage7 } from '../../utils/validation';

const Page7 = ({ 
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
    const isValid = validatePage7(formData, setErrors, setShowValidation);
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
        <h2 className="section-title">PERSON IN CONTROL OF WORKPLACE</h2>
        
        <div className="question">
          <h4 className="question-title required">31. Name</h4>
          <input
            type="text"
            className={`text-input ${errors.control_person_name ? 'error' : ''}`}
            value={formData.control_person_name || ''}
            onChange={(e) => handleInputChange('control_person_name', e.target.value)}
            placeholder="Enter your answer"
          />
          {errors.control_person_name && <div className="error-message show">{errors.control_person_name}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">32. Position</h4>
          <select
            className={`text-input ${errors.control_person_position ? 'error' : ''}`}
            value={formData.control_person_position || ''}
            onChange={(e) => handleInputChange('control_person_position', e.target.value)}
          >
            <option value="">Select Position</option>
            {positions.map(position => (
              <option key={position.value} value={position.value}>
                {position.label}
              </option>
            ))}
          </select>
          {errors.control_person_position && <div className="error-message show">{errors.control_person_position}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">33. Department</h4>
          <select
            className={`text-input ${errors.control_person_department ? 'error' : ''}`}
            value={formData.control_person_department || ''}
            onChange={(e) => handleInputChange('control_person_department', e.target.value)}
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept.value} value={dept.value}>
                {dept.label}
              </option>
            ))}
          </select>
          {errors.control_person_department && <div className="error-message show">{errors.control_person_department}</div>}
        </div>

        <div className="question">
          <h4 className="question-title required">34. Date</h4>
          <input
            type="date"
            className={`text-input ${errors.control_person_date ? 'error' : ''}`}
            value={formData.control_person_date || ''}
            onChange={(e) => handleInputChange('control_person_date', e.target.value)}
          />
          {errors.control_person_date && <div className="error-message show">{errors.control_person_date}</div>}
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

export default Page7;