import { Document, Page, pdfjs } from 'react-pdf';
const [numPages, setNumPages] = useState(null);


function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
<Document
  file="example.pdf"
  onLoadSuccess={onDocumentLoadSuccess}
>
  {Array.from(
    new Array(numPages),
    (el, index) => (
      <Page
        key={`page_${index + 1}`}
        pageNumber={index + 1}
      />
    ),
  )}
</Document>
  import React, { useState } from 'react';
  import { Document, Page, pdfjs } from 'react-pdf';
  
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
  function PdfViewer() {
    const [numPages, setNumPages] = useState(null);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <>
        <button onClick={() => window.location.href = "example.pdf"}>
          View Document
        </button>
        <Document
          file="example.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ),
          )}
        </Document>
      </>
    );
  }
  
  export default PdfViewer;
  