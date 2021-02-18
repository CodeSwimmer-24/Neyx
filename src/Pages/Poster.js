import React from "react";
import "./Poster.css";
import img1 from "../images/logo.PNG";
import { Button } from "@material-ui/core";

function Body() {
  return (
    <div className="poster ">
      <div class="poster__logo">
        <img src={img1} />
        <h1>Beacause we see future</h1>
        <Button variant="outlined">Know More</Button>
      </div>
      <div className="poster__image">
        <img src="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png" />
      </div>
    </div>
  );
}

export default Body;
