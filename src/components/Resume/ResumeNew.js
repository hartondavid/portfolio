import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/David Harton.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set PDF worker source for production - try multiple fallbacks
try {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
} catch (error) {
  console.warn('Failed to set PDF worker from unpkg, trying alternative...');
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfError, setPdfError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);

    // Set a timeout to show error if PDF doesn't load within 10 seconds
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn('PDF loading timeout');
        setPdfError(true);
        setLoading(false);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [loading]);

  const handlePdfError = () => {
    console.error('PDF failed to load');
    setPdfError(true);
    setLoading(false);
  };

  const handlePdfSuccess = () => {
    console.log('PDF loaded successfully');
    setLoading(false);
    setPdfError(false);
  };

  // eslint-disable-next-line no-unused-vars

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
          {loading && !pdfError && (
            <div className="d-flex justify-content-center">
              <p>Loading PDF...</p>
            </div>
          )}

          {pdfError ? (
            <div className="d-flex justify-content-center">
              <p style={{ color: 'red' }}>PDF preview not available. Please use the download button above.</p>
            </div>
          ) : (
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              onLoadError={handlePdfError}
              onLoadSuccess={handlePdfSuccess}
              loading="Loading PDF..."
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
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
