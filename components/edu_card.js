import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export default function EduCard(props) {
  const [open, setOpen] = useState(false);
  var school = props.school;
  var degree = props.degree;
  var dates = props.dates;
  var acc = props.accomplishments;
  var link = props.link;
  var logo = props.logo;

  return (
    <div className="edu-div">
      <div className="logo-and-info">
        <div className="ed-logo-div">
          <a rel="noopener noreferrer" href={link} target="_blank">
            <img className="edu-logo-img" src={logo} alt="school logo" />
          </a>
        </div>
        <div className="edu-detail-div">
          <h3>{school}</h3>
          <h4>{degree}</h4>
          <h6>
            <i>{dates}</i>
          </h6>
        </div>
      </div>
      <div className="dropdown">
        <Button
          className="dropdown-btn"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          aria-expanded={open}
        >
          Accomplishments:
        </Button>
        <Collapse in={open}>
          <div className="collapse-text">
            <ul>
              {acc.map((item) => {
                return <li key={item.id}>{item}</li>;
              })}
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
