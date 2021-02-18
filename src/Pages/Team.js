import React from "react";
import "./Team.css";
import TeamImage from "./TeamImage";
function Team() {
  return (
    <div className="team">
      <h1 className="team__heading">Our Team</h1>
      <div class="team__image">
        <TeamImage
          className="image_down"
          image="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
          name="Elon"
        />
        <div className="image__down">
          <TeamImage
            className="odd__image"
            image="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
            name="Elon Musk"
          />
        </div>
        <TeamImage
          image="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
          name="Elon Mask"
        />
        <div className="image__down">
          <TeamImage
            image="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
            name="Elon Musk"
          />
        </div>
        <TeamImage
          image="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
          name="Elon Musk"
        />
        <div className="image__down">
          <TeamImage
            image="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
            name="Elon Musk"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
