import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/David Harton.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set PDF worker source - try multiple fallbacks for production
try {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
} catch (error) {
  console.warn('Failed to set PDF worker from unpkg, trying alternative...');
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = () => {
    setLoading(false);
    setError(null);
    setShowFallback(false);
    console.log('PDF loaded successfully');
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setError('PDF viewer not available. Please download the CV to view it.');
    setLoading(false);
    setShowFallback(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'David Harton CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {loading && !showFallback && (
            <div className="d-flex justify-content-center">
              <p>Loading PDF...</p>
            </div>
          )}

          {error && (
            <div className="d-flex justify-content-center">
              <p style={{ color: 'red' }}>{error}</p>
            </div>
          )}

          {showFallback ? (
            <div className="d-flex justify-content-center flex-column align-items-center">
              <div style={{
                width: width > 786 ? '600px' : '300px',
                height: width > 786 ? '800px' : '400px',
                border: '2px dashed #ccc',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                margin: '20px 0'
              }}>
                <p style={{ fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
                  PDF Preview Not Available
                </p>
                <p style={{ fontSize: '14px', marginBottom: '20px', textAlign: 'center', color: '#666' }}>
                  Please download the CV to view it
                </p>
                <Button
                  variant="primary"
                  onClick={handleDownload}
                  style={{ maxWidth: "200px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </div>
            </div>
          ) : (
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading="Loading PDF..."
            >
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.7 : 0.6}
                loading="Loading page..."
              />
            </Document>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
