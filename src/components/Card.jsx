import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="" />
      </div>
      <h3>John Doe</h3>
      <h5>Ceo & Founder</h5>
      <p>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <button>Contact</button>
    </div>
  );
};

export default Card;