import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [showCalendar, setShowCalendar] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add a small delay to ensure the component is properly mounted
    const timer = setTimeout(() => {
      setShowCalendar(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleCalendarError = (error) => {
    console.error('GitHub Calendar error:', error);
    setError('GitHub Calendar not available');
    setShowCalendar(false);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="red">Code</strong>
      </h1>

      {error ? (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          maxWidth: '600px'
        }}>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            GitHub Calendar not available
          </p>
          <a
            href="https://github.com/hartondavid"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#e6453a',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            View my GitHub Profile →
          </a>
        </div>
      ) : (
        <div style={{
          position: 'relative',
          minHeight: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {showCalendar && (
            <div style={{
              border: '1px solid #e1e4e8',
              borderRadius: '6px',
              padding: '16px',
              backgroundColor: '#ffffff'
            }}>
              <GitHubCalendar
                username="hartondavid"
                blockSize={15}
                blockMargin={5}
                color="#e6453a"
                fontSize={16}
                onError={handleCalendarError}
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
                }}
              />
            </div>
          )}
        </div>
      )}
    </Row>
  );
}

export default Github;
