import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function Github() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [CalendarComponent, setCalendarComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Try to import the component
        const module = await import("react-github-calendar");
        setCalendarComponent(() => module.default);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading GitHub Calendar:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    // Add a small delay to ensure the component is ready
    const timer = setTimeout(loadComponent, 100);
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
          <p>Unable to load GitHub contribution data.</p>
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
      {CalendarComponent && !isLoading && (
        <div>
          <CalendarComponent
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
      )}
    </Row>
  );
}

export default Github;
