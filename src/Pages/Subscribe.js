import { Button } from "@material-ui/core";
import React from "react";
import "./Subscribe.css";
function Subscribe() {
  return (
    <div className="subscribe">
      <h2>Subscribe to our newsletter</h2>
      <div className="subscribe__input">
        <input type="text" placeholder="Your email address..." />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}

export default Subscribe;
