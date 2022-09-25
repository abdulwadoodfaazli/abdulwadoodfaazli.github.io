import React from "react";

export default function ProjCard(props) {
  var title = props.title;
  var link = props.link;
  var desc = props.desc;
  var img = props.img;
  var vid = props.vid;

  return (
    <div className="proj-div">
        <img className="proj-img" src={img} alt="Project Image. If you can't see this, your computer is probably having some difficulty rendering this image." />
        <h2>{title}</h2>
        <h6>
          <i>{desc}</i>
        </h6>
      <div className="buttons">
        {vid !== "" ? (
          <a rel="noopener noreferrer" href={vid} target="_blank">
            <button className="proj-button">Video</button>
          </a>
        ) : (
          <div></div>
        )}

        <a rel="noopener noreferrer" href={link} target="_blank">
          <button className="proj-button">Details</button>
        </a>
      </div>
    </div>
  );
}
