import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [showFallback, setShowFallback] = useState(false);

  const handleError = () => {
    console.error('GitHub Calendar failed to load');
    setShowFallback(true);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="red">Code</strong>
      </h1>

      {showFallback ? (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          border: '2px dashed #e6453a',
          borderRadius: '8px',
          backgroundColor: 'rgba(230, 69, 58, 0.1)',
          maxWidth: '600px'
        }}>
          <p style={{ color: 'white', marginBottom: '15px' }}>
            GitHub contribution data not available
          </p>
          <a
            href="https://github.com/hartondavid"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#e6453a',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            View my GitHub Profile →
          </a>
        </div>
      ) : (
        <div onError={handleError}>
          <GitHubCalendar
            username="hartondavid"
            blockSize={15}
            blockMargin={5}
            color="#e6453a"
            fontSize={16}
          />
        </div>
      )}
    </Row>
  );
}

export default Github;
