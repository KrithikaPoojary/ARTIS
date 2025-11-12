import React, { useState } from 'react';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';
import Page6 from './components/pages/Page6';
import Page7 from './components/pages/Page7';
import Page8 from './components/pages/Page8';
import Page9 from './components/pages/Page9';
import FormSubmission from './components/FormSubmission';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const totalPages = 9;

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    // Simulate API call with success result
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Generate reference ID like in your PHP code
      const reference_id = 'INC-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      
      const result = {
        success: true,
        reference_id: reference_id,
        timestamp: new Date().toISOString()
      };
      
      setSubmissionResult(result);
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  // Calculate progress percentage (0% to 100%)
  const getProgressPercentage = () => {
    return ((currentPage - 1) / (totalPages - 1)) * 100;
  };

  const renderPage = () => {
    const pageProps = {
      formData,
      updateFormData,
      nextPage,
      prevPage,
      loading,
      currentPage,
      totalPages,
      progressPercentage: getProgressPercentage()
    };

    switch (currentPage) {
      case 1: return <Page1 {...pageProps} />;
      case 2: return <Page2 {...pageProps} />;
      case 3: return <Page3 {...pageProps} />;
      case 4: return <Page4 {...pageProps} />;
      case 5: return <Page5 {...pageProps} />;
      case 6: return <Page6 {...pageProps} />;
      case 7: return <Page7 {...pageProps} />;
      case 8: return <Page8 {...pageProps} />;
      case 9: return <Page9 {...pageProps} onSubmit={handleSubmit} />;
      default: return <Page1 {...pageProps} />;
    }
  };

  // If form is submitted, show the submission results
  if (submitted) {
    return <FormSubmission result={submissionResult} formData={formData} />;
  }

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-left">
          <img src="/ALPS.jpg" alt="Alps" className="logo" />
        </div>
        <div className="header-right">
          <div className="form-title">ARTIS INCIDENT REPORT FORM</div>
          <div className="form-subtitle">NEAR MISS/ INCIDENT/ ACCIDENT REPORT & INVESTIGATION FORM</div>
        </div>
      </header>

      <div className="form-notice">
        When you submit this form, it will not automatically collect your details like name and email address unless
        you provide it yourself.
      </div>

      <div className="required-notice"><span className="required-star">*</span> Required</div>

      <main className="app-main">
        {renderPage()}
      </main>

      <div className="footer-note">
        <p>Never give out your password. Report abuse</p>
        <p>This content is created by the owner of the form. The data you submit will be sent to the form owner. Never give out your password.</p>
        <p>The owner of this form has not provided a privacy statement as to how they will use your response data. Do not provide personal or sensitive information.</p>
      </div>
    </div>
  );
}

export default App;