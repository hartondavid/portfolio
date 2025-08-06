import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Set a timeout to handle loading and potential CORS issues
    const timer = setTimeout(() => {
      setIsLoading(false);
      // If the calendar doesn't load after 8 seconds, show error
      setTimeout(() => {
        setHasError(true);
      }, 8000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (hasError) {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="red">Code</strong>
        </h1>
        <div style={{
          textAlign: "center",
          padding: "20px",
          color: "#f4cd0d",
          fontSize: "16px"
        }}>
          <p>Unable to load GitHub contribution data due to CORS restrictions.</p>
          <p>Check out my GitHub profile:
            <a
              href="https://github.com/hartondavid"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f4cd0d", textDecoration: "underline", marginLeft: "5px" }}
            >
              @hartondavid
            </a>
          </p>
        </div>
      </Row>
    );
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="red">Code</strong>
      </h1>
      {isLoading && (
        <div style={{
          textAlign: "center",
          padding: "20px",
          color: "#f4cd0d"
        }}>
          Loading GitHub contributions...
        </div>
      )}
      <div style={{ opacity: isLoading ? 0.5 : 1 }}>
        <GitHubCalendar
          username="hartondavid"
          blockSize={15}
          blockMargin={5}
          color="#f4cd0d"
          fontSize={16}
          theme={{
            level0: '#ebedf0',
            level1: '#9be9a8',
            level2: '#40c463',
            level3: '#30a14e',
            level4: '#216e39',
          }}
        />
      </div>
    </Row>
  );
}

export default Github;
