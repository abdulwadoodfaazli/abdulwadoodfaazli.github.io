import React from "react";

export default function ExpCard(props) {
  var company = props.company;
  var link = props.link;
  var dates = props.dates;
  var role = props.role;
  var logo = props.logo;
  var desc = props.description;
  var work = props.work;

  return (
    <div className="exp-card">
      <div className="logo-div">
        <a rel="noopener noreferrer" href={link} target="_blank">
          <img className="logo-img" src={logo} alt="company logo" />
        </a>
      </div>
      <div className="details">
        <a rel="noopener noreferrer" href={link} target="_blank">
          <h2>{company}</h2>
        </a>
        <h4>{role}</h4>
        <h5>
          <i>{dates}</i>
        </h5>
        <h6>
          <i>{desc}</i>
        </h6>
        <h6>
          <b>Work and Impact: </b>
        </h6>
        <ul>
          {work.map((item) => {
            return <li key={item.id}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
