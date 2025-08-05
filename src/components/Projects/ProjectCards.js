import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ position: "relative" }}>

      <Card.Img variant="top" src={props.imgPath} alt="card-img"
        onClick={() => {
          window.open(props.demoLink, "_blank");
        }}
        style={{ cursor: "pointer" }}
      />

      {/* Icon in top-right corner */}
      <div style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1,

        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>

        <Tooltip title={
          <div style={{
            fontSize: "14px",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "12px",
            color: "black",
            maxWidth: "300px"
          }}>
            <Typography variant="h6" style={{ marginBottom: "8px", fontWeight: "bold" }}>
              Credentials
            </Typography>
            {props.title === "Education Platform" && (
              <>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Admin:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> admin@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> admin
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Teacher:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> david@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> david
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Student:</span>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> alex@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> alex
                </div>
              </>
            )}

            {props.title === "Restaurant Management System" && (
              <>
                <>
                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>Manager:</span>
                  </div>
                  <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                    <span style={{ fontWeight: "bold" }}>Email:</span> manager@gmail.com<br />
                    <span style={{ fontWeight: "bold" }}>Password:</span> manager
                  </div>

                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>Waiter:</span>
                  </div>
                  <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                    <span style={{ fontWeight: "bold" }}>Email:</span> elena@gmail.com<br />
                    <span style={{ fontWeight: "bold" }}>Password:</span> elena
                  </div>

                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>Chef:</span>
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Email:</span> maria@gmail.com<br />
                    <span style={{ fontWeight: "bold" }}>Password:</span> maria
                  </div>
                </>
              </>
            )}

            {props.title === "Cake Management System" && (
              <>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Admin:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> admin@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> admin
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Customer:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> david@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> david
                </div>
              </>
            )}

            {props.title === "Library Loan Management System" && (
              <>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Admin:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> admin@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> admin
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Librarian:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> elena@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> elena
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Student:</span>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> maria@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> maria
                </div>
              </>
            )}

            {props.title === "Medical Booking System" && (
              <>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Doctor:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> elena@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> elena
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Pacient:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> catalina@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> catalina
                </div>

              </>
            )}

            {props.title === "Online Auction Platform" && (
              <>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Customer:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> david@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> david
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Seller:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> alex@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> alex
                </div>
              </>
            )}

            {props.title === "Delivery Management System" && (
              <>
                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Admin:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> admin@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> david
                </div>

                <div style={{ marginBottom: "6px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>Courier:</span>
                </div>
                <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>Email:</span> alex@gmail.com<br />
                  <span style={{ fontWeight: "bold" }}>Password:</span> alex
                </div>
              </>
            )}


          </div>
        } placement="top">
          <IconButton>
            <InfoIcon style={{ color: "#e6453a", fontSize: "30px" }} />
          </IconButton>
        </Tooltip>
      </div>

      <Card.Body>

        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", color: "white" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
