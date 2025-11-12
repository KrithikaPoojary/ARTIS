// src/utils/helpers.js
export const formatDisplayValue = (value, options = []) => {
  if (Array.isArray(value)) {
    return value.map(val => {
      const option = options.find(opt => opt.value === val);
      return option ? option.label : val;
    }).join(', ');
  }
  
  if (typeof value === 'string') {
    const option = options.find(opt => opt.value === value);
    return option ? option.label : value;
  }
  
  return value || 'Not provided';
};

export const generateReferenceId = () => {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const uniqueId = Math.random().toString(36).substr(2, 9);
  return `INC-${date}-${uniqueId}`;
};

export const getFieldLabel = (fieldName, fieldLabels) => {
  return fieldLabels[fieldName] || fieldName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};