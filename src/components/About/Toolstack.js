import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
} from "react-icons/si";
import { Tooltip, Typography } from "@mui/material";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Windows
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiWindows style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Visual Studio Code
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Postman
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Slack
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Vercel
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>

    </Row>
  );
}

export default Toolstack;
