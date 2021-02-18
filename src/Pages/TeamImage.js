import React from "react";
import "./TitleImage.css";
function TeamImage({ image, name }) {
  return (
    <div className="title">
      <div className="titleimage">
        <img className="teamimage__image" src={image} />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default TeamImage;
