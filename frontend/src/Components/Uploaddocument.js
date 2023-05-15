import React, { useState } from 'react';
import { FaPaperclip } from 'react-icons/fa';

function UploadDocument() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    // Implement file upload logic here
    console.log(selectedFile);
  };

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <label>
          <FaPaperclip /> 
          <input type="file" onChange={handleFileInputChange} />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadDocument;
