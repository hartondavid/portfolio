import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPhp,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
  SiExpress,
  SiNpm,
} from "react-icons/si";
import { Tooltip, Typography } from "@mui/material";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            C++
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">

          <CgCPlusPlus style={{ cursor: "pointer" }} />

        </Col>
      </Tooltip>

      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            JavaScript
          </Typography>
        </div>
      } placement="top">

        <Col xs={4} md={2} className="tech-icons" >
          <DiJavascript1 style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>

      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Node.js
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>

      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            React
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiReact style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>

      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            MongoDB
          </Typography>
        </div>
      } placement="top">

        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>

      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Git
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiGit style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>

      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Firebase
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>

      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            PostgreSQL
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Python
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiPython style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Java
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiJava style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            PHP
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiPhp style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            MySQL
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiMysql style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            HTML
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            CSS
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Express
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
      <Tooltip title={
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "12px",
        }}>
          <Typography variant="h6" style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
            Node Package Manager
          </Typography>
        </div>
      } placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiNpm style={{ cursor: "pointer" }} />
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Techstack;
