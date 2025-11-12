import React from 'react';

const FormHeader = () => {
  return (
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
  );
};

export default FormHeader;