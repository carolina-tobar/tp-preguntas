import React from "react";
import "../components/CardHome.css";

const CardHome = ({ img, tema, preguntas }) => {
  return (
    <div className="card-home">
      <img className="card-img" src={img} alt={tema} />
      <p className="card-home-title">
        {tema} - {preguntas}
      </p>
    </div>
  );
};

export default CardHome;
