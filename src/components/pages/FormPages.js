import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import NavigationWithProgress from '../NavigationWithProgress';

const FormPages = ({ currentPage, formData, updateFormData, nextPage, prevPage, loading }) => {
  const totalPages = 9;

  const renderPage = () => {
    const commonProps = {
      formData,
      updateFormData,
      nextPage,
      prevPage
    };

    switch (currentPage) {
      case 1: return <Page1 {...commonProps} />;
      case 2: return <Page2 {...commonProps} />;
      case 3: return <Page3 {...commonProps} />;
      case 4: return <Page4 {...commonProps} />;
      case 5: return <Page5 {...commonProps} />;
      case 6: return <Page6 {...commonProps} />;
      case 7: return <Page7 {...commonProps} />;
      case 8: return <Page8 {...commonProps} />;
      case 9: return <Page9 {...commonProps} loading={loading} />;
      default: return <Page1 {...commonProps} />;
    }
  };

  return (
    <>
      {renderPage()}
      <NavigationWithProgress 
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={nextPage}
        onPrev={prevPage}
        showSubmit={currentPage === totalPages}
        loading={loading}
      />
    </>
  );
};

export default FormPages;