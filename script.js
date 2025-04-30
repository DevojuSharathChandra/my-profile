function downloadResume() {
    // Replace with your actual resume file URL
    const link = document.createElement('a');
    link.href = 'Sharath_Devoju_Resume.pdf'; // Place this file in the same folder or change the path accordingly
    link.download = 'Sharath_Devoju_Resume.pdf';
    link.click();
  }
  