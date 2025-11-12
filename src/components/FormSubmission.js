// src/components/FormSubmission.js
import React from 'react';
import { fieldLabels, incidentCategories, personTypes, severityLevels, natureInjuries, bodyLocations, mechanisms, agencies, positions, departments } from '../utils/constants';
import { formatDisplayValue } from '../utils/helpers';

const FormSubmission = ({ result, formData }) => {
  if (!result) return null;

  // Value mappings for display
  const valueMappings = {
    person_type: personTypes,
    severity: severityLevels,
    first_aid: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    witnesses: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    remedial_implemented: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    file_approve: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'other', label: 'Other' }
    ],
    form_complete: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    form_insufficient: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    form_closed: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    further_actions: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    approved: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    file_reference: [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }],
    incident_category: incidentCategories,
    nature_injury: natureInjuries,
    body_location: bodyLocations,
    mechanism: mechanisms,
    agency: agencies,
    control_person_position: positions,
    control_person_department: departments
  };

  // Group fields by section for better organization
  const sections = {
    'Incident Details': ['location', 'incident_category', 'reporting_date', 'reporting_time'],
    'Injured Person Details': ['injured_name', 'nationality', 'address', 'person_type', 'injury_type', 'body_part', 'injury_cause', 'occurred_date', 'occurred_time', 'severity'],
    'Incident Matrix': ['nature_injury', 'body_location', 'mechanism', 'agency'],
    'Further Details': ['first_aid', 'reported_to', 'witnesses'],
    'Incident Investigation': ['instructions', 'contributing_factors', 'root_cause', 'immediate_action', 'follow_up_action', 'responsibility', 'remedial_action'],
    'Follow Up & Close Out': ['remedial_implemented', 'file_approve', 'reasons_not_implemented'],
    'Person in Control': ['control_person_name', 'control_person_position', 'control_person_department', 'control_person_date'],
    'HSE Department': ['form_complete', 'form_insufficient', 'form_closed', 'further_actions'],
    'Final Approval': ['approved', 'file_reference']
  };

  const formatValue = (field, value) => {
    if (Array.isArray(value)) {
      return value.map(val => {
        const mapping = valueMappings[field];
        if (mapping) {
          const found = mapping.find(item => item.value === val);
          return found ? found.label : val;
        }
        return val;
      }).join(', ');
    }

    const mapping = valueMappings[field];
    if (mapping) {
      const found = mapping.find(item => item.value === value);
      if (found) return found.label;
    }

    return value || 'Not provided';
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNewReport = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <header>
        <div className="header-left">
          <img src="/ALPS.jpg" alt="Alps" className="logo" />
        </div>
        <div className="header-right">
          <div className="form-title">ARTIS INCIDENT REPORT FORM</div>
          <div className="form-subtitle">
            NEAR MISS/ INCIDENT/ ACCIDENT REPORT & INVESTIGATION FORM
          </div>
        </div>
      </header>

      <div className="form-container">
        {/* Success/Error Message */}
        {result.success ? (
          <div className="success-message show">
            <h3>✅ Incident Report Submitted Successfully!</h3>
            <p>Your incident report has been received and saved to the database.</p>
            <div className="reference-id">
              <strong>Reference ID:</strong> {result.reference_id}
            </div>
            {result.timestamp && (
              <div className="submission-time">
                <strong>Submission Time:</strong> {new Date(result.timestamp).toLocaleString()}
              </div>
            )}
            <p className="success-note">
              Please keep this reference ID for your records. You may need it for future inquiries.
            </p>
          </div>
        ) : (
          <div className="validation-message show">
            <h3>Error Submitting Form</h3>
            <p>There was an error saving your data. Please try again.</p>
            {result.error && (
              <div className="error-details">
                <strong>Error details:</strong> {result.error}
              </div>
            )}
            <p className="error-note">
              If this problem persists, please contact the system administrator.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="submission-actions">
          <button 
            type="button" 
            className="nav-btn no-print" 
            onClick={handlePrint}
          >
            🖨️ Print Summary
          </button>
          <button 
            type="button" 
            className="submit-btn no-print" 
            onClick={handleNewReport}
          >
            📝 New Report
          </button>
        </div>

        {/* Submitted Data Summary */}
        <div className="form-section">
          <h2 className="section-title">Submitted Data Summary</h2>
          <div className="submission-info">
            <div className="submission-meta">
              <strong>Submission Date:</strong> {new Date().toLocaleDateString()}
              <strong>Submission Time:</strong> {new Date().toLocaleTimeString()}
              {result.reference_id && <strong>Reference ID:</strong>}
              {result.reference_id && <span className="reference-badge">{result.reference_id}</span>}
            </div>
          </div>

          <div className="structured-data">
            {Object.entries(sections).map(([sectionTitle, fields]) => {
              const hasData = fields.some(field => 
                formData[field] && 
                (Array.isArray(formData[field]) ? formData[field].length > 0 : formData[field].toString().trim() !== '')
              );

              if (!hasData) return null;

              return (
                <div key={sectionTitle} className="data-section">
                  <h3>{sectionTitle}</h3>
                  {fields.map(field => {
                    const value = formData[field];
                    if (!value || (Array.isArray(value) && value.length === 0) || value.toString().trim() === '') {
                      return null;
                    }

                    const displayValue = formatValue(field, value);
                    
                    // Handle "other" fields
                    let finalDisplayValue = displayValue;
                    const otherField = `${field}_other`;
                    if (formData[otherField] && formData[otherField].trim() !== '') {
                      finalDisplayValue += ` (${formData[otherField]})`;
                    }

                    return (
                      <div key={field} className="data-row">
                        <div className="data-label">
                          {fieldLabels[field] || field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:
                        </div>
                        <div className="data-value">
                          {finalDisplayValue}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Additional Information for Success Case */}
          {result.success && (
            <div className="success-instructions">
              <div className="instruction-section">
                <h4>📋 Next Steps</h4>
                <ul>
                  <li>Keep a copy of this summary for your records</li>
                  <li>The HSE department will review this incident report</li>
                  <li>You may be contacted for additional information if needed</li>
                  <li>Follow up on any immediate actions identified in the report</li>
                </ul>
              </div>
              
              <div className="instruction-section">
                <h4>📞 Contact Information</h4>
                <p>
                  If you have any questions about this submission, please contact the HSE Department 
                  with your reference ID: <strong>{result.reference_id}</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Print-only elements */}
        <div className="print-footer">
          <p>ARTIS Incident Report Form - Reference ID: {result.reference_id || 'N/A'}</p>
          <p>Generated on: {new Date().toLocaleString()}</p>
          <p>This is a system-generated summary. For official records, refer to the database.</p>
        </div>
      </div>

      <div className="footer-note no-print">
        <p>Never give out your password. Report abuse</p>
        <p>This content is created by the owner of the form. The data you submit will be sent to the form owner. Never give out your password.</p>
        <p>The owner of this form has not provided a privacy statement as to how they will use your response data. Do not provide personal or sensitive information.</p>
      </div>

      <style jsx>{`
        .submission-actions {
          display: flex;
          gap: 15px;
          margin: 20px 0;
          justify-content: center;
          flex-wrap: wrap;
        }

        .submission-info {
          background: #e8f5e8;
          border: 1px solid #4caf50;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 30px;
        }

        .submission-meta {
          display: grid;
          grid-template-columns: auto 1fr auto 1fr;
          gap: 10px 20px;
          align-items: center;
        }

        .reference-badge {
          background: #ff9800;
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-family: monospace;
          font-weight: bold;
        }

        .reference-id, .submission-time, .error-details {
          margin: 10px 0;
          padding: 10px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 4px;
        }

        .success-note, .error-note {
          margin-top: 15px;
          font-style: italic;
          color: #666;
        }

        .success-instructions {
          margin-top: 30px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #4caf50;
        }

        .instruction-section {
          margin-bottom: 20px;
        }

        .instruction-section:last-child {
          margin-bottom: 0;
        }

        .instruction-section h4 {
          color: #ff8f00;
          margin-bottom: 10px;
        }

        .instruction-section ul {
          margin-left: 20px;
          color: #555;
        }

        .instruction-section li {
          margin-bottom: 5px;
        }

        .print-footer {
          display: none;
        }

        @media print {
          .no-print {
            display: none !important;
          }

          .print-footer {
            display: block;
            margin-top: 50px;
            padding-top: 20px;
            border-top: 2px solid #ccc;
            text-align: center;
            font-size: 12px;
            color: #666;
          }

          .submission-actions,
          .footer-note {
            display: none;
          }

          .success-instructions {
            break-inside: avoid;
          }

          .data-section {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }

        @media (max-width: 768px) {
          .submission-meta {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .submission-actions {
            flex-direction: column;
          }

          .submission-actions button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default FormSubmission;