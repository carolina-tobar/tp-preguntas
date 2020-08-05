import React from "react";
import "../pages/Results.css";
import Result from "../components/Result";

const Results = () => {
  return (
    <div className="container-results">
      <p className="results-title">Categoría</p>
      <p className="results-subtitle">Resultados</p>
      <Result />
      <p>Puntaje</p>
      <p>Resultado</p>
      <button>Ir a Home</button>
    </div>
  );
};

export default Results;
