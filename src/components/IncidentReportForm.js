import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormNotice from './FormNotice';
import FormPages from './pages/FormPages';
import FormFooter from './FormFooter';
import FormSubmission from './FormSubmission';
import { submitIncidentReport } from '../services/api';
import '../styles/IncidentReportForm.css';

const IncidentReportForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await submitIncidentReport(formData);
      setSubmissionResult(result);
      setSubmitted(true);
    } catch (error) {
      setSubmissionResult({ success: false, error: error.message });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <FormSubmission result={submissionResult} formData={formData} />;
  }

  return (
    <div className="container">
      <FormHeader />
      <FormNotice />
      <div className="required-notice">
        <span className="required-star">*</span> Required
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <FormPages 
            currentPage={currentPage}
            formData={formData}
            updateFormData={updateFormData}
            nextPage={nextPage}
            prevPage={prevPage}
            loading={loading}
          />
        </form>
      </div>
      <FormFooter />
    </div>
  );
};

export default IncidentReportForm;