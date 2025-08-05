import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/David Harton.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
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
        <Row className="resume" style={{ justifyContent: "center", padding: "50px 0" }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            padding: '40px',
            border: '2px dashed #e6453a',
            borderRadius: '10px',
            backgroundColor: 'rgba(230, 69, 58, 0.1)'
          }}>
            <h3 style={{ color: '#e6453a', marginBottom: '20px' }}>
              Download My Resume
            </h3>
            <p style={{ color: 'white', marginBottom: '30px' }}>
              Click the button below to download my CV in PDF format
            </p>
            <Button
              variant="primary"
              onClick={handleDownload}
              style={{
                maxWidth: "250px",
                backgroundColor: '#e6453a',
                borderColor: '#e6453a',
                fontSize: '18px',
                padding: '12px 24px'
              }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
