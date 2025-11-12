// src/utils/validation.js
export const validatePage1 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.location || formData.location.trim() === '') {
    newErrors.location = 'This question is required.';
  }
  
  if (!formData.incident_category || formData.incident_category.length === 0) {
    newErrors.incident_category = 'This question is required.';
  }
  
  if (!formData.reporting_date) {
    newErrors.reporting_date = 'This question is required.';
  }
  
  if (!formData.reporting_time) {
    newErrors.reporting_time = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage2 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.injured_name || formData.injured_name.trim() === '') {
    newErrors.injured_name = 'This question is required.';
  }
  
  if (!formData.nationality || formData.nationality.trim() === '') {
    newErrors.nationality = 'This question is required.';
  }
  
  if (!formData.address || formData.address.trim() === '') {
    newErrors.address = 'This question is required.';
  }
  
  if (!formData.person_type) {
    newErrors.person_type = 'This question is required.';
  }
  
  if (!formData.injury_type || formData.injury_type.trim() === '') {
    newErrors.injury_type = 'This question is required.';
  }
  
  if (!formData.body_part || formData.body_part.trim() === '') {
    newErrors.body_part = 'This question is required.';
  }
  
  if (!formData.injury_cause || formData.injury_cause.trim() === '') {
    newErrors.injury_cause = 'This question is required.';
  }
  
  if (!formData.occurred_date) {
    newErrors.occurred_date = 'This question is required.';
  }
  
  if (!formData.occurred_time) {
    newErrors.occurred_time = 'This question is required.';
  }
  
  if (!formData.severity) {
    newErrors.severity = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage3 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.nature_injury || formData.nature_injury.length === 0) {
    newErrors.nature_injury = 'This question is required.';
  }
  
  if (!formData.body_location || formData.body_location.length === 0) {
    newErrors.body_location = 'This question is required.';
  }
  
  if (!formData.mechanism || formData.mechanism.length === 0) {
    newErrors.mechanism = 'This question is required.';
  }
  
  if (!formData.agency || formData.agency.length === 0) {
    newErrors.agency = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage4 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.first_aid) {
    newErrors.first_aid = 'This question is required.';
  }
  
  if (!formData.reported_to || formData.reported_to.trim() === '') {
    newErrors.reported_to = 'This question is required.';
  }
  
  if (!formData.witnesses) {
    newErrors.witnesses = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage5 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.instructions || formData.instructions.trim() === '') {
    newErrors.instructions = 'This question is required.';
  }
  
  if (!formData.contributing_factors || formData.contributing_factors.trim() === '') {
    newErrors.contributing_factors = 'This question is required.';
  }
  
  if (!formData.root_cause || formData.root_cause.trim() === '') {
    newErrors.root_cause = 'This question is required.';
  }
  
  if (!formData.immediate_action || formData.immediate_action.trim() === '') {
    newErrors.immediate_action = 'This question is required.';
  }
  
  if (!formData.follow_up_action || formData.follow_up_action.trim() === '') {
    newErrors.follow_up_action = 'This question is required.';
  }
  
  if (!formData.responsibility || formData.responsibility.trim() === '') {
    newErrors.responsibility = 'This question is required.';
  }
  
  if (!formData.remedial_action || formData.remedial_action.trim() === '') {
    newErrors.remedial_action = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage6 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.remedial_implemented) {
    newErrors.remedial_implemented = 'This question is required.';
  }
  
  if (!formData.file_approve) {
    newErrors.file_approve = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage7 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.control_person_name || formData.control_person_name.trim() === '') {
    newErrors.control_person_name = 'This question is required.';
  }
  
  if (!formData.control_person_position) {
    newErrors.control_person_position = 'This question is required.';
  }
  
  if (!formData.control_person_department) {
    newErrors.control_person_department = 'This question is required.';
  }
  
  if (!formData.control_person_date) {
    newErrors.control_person_date = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage8 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.form_complete) {
    newErrors.form_complete = 'This question is required.';
  }
  
  if (!formData.form_insufficient) {
    newErrors.form_insufficient = 'This question is required.';
  }
  
  if (!formData.form_closed) {
    newErrors.form_closed = 'This question is required.';
  }
  
  if (!formData.further_actions) {
    newErrors.further_actions = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

export const validatePage9 = (formData, setErrors, setShowValidation) => {
  const newErrors = {};
  
  if (!formData.approved) {
    newErrors.approved = 'This question is required.';
  }
  
  if (!formData.file_reference) {
    newErrors.file_reference = 'This question is required.';
  }

  setErrors(newErrors);
  setShowValidation(Object.keys(newErrors).length > 0);
  return Object.keys(newErrors).length === 0;
};

// Helper function to validate any field
export const validateField = (field, value) => {
  const validators = {
    location: (val) => val && val.trim() !== '',
    injured_name: (val) => val && val.trim() !== '',
    nationality: (val) => val && val.trim() !== '',
    address: (val) => val && val.trim() !== '',
    // Add more field validators as needed
  };

  const validator = validators[field];
  return validator ? validator(value) : true;
};