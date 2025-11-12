// src/services/api.js
export const submitIncidentReport = async (formData) => {
  try {
    // For development, use mock function
    return await mockSubmitIncidentReport(formData);
    
    // For production, use real API:
    /*
    const response = await fetch('/api/incidents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
    */
  } catch (error) {
    throw new Error('Network error: ' + error.message);
  }
};

// Mock function for development
export const mockSubmitIncidentReport = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random success/failure for testing
      const isSuccess = Math.random() > 0.2; // 80% success rate
      
      if (isSuccess) {
        resolve({
          success: true,
          reference_id: `INC-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.random().toString(36).substr(2, 9)}`,
          message: 'Incident report submitted successfully!',
          timestamp: new Date().toISOString()
        });
      } else {
        reject(new Error('Simulated server error: Unable to save data'));
      }
    }, 2000);
  });
};