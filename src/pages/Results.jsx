import React from "react";
import "../pages/Results.css";
import Result from "../components/Result";
import Valoracion from "../components/Valoracion";
import { Link } from "react-router-dom";

const Results = ({ listaRespuestas }) => {
  return (
    <div className="container-results">
      <p className="results-title">Categoría</p>
      <p className="results-subtitle results-mod">Resultados</p>
      {listaRespuestas.map((respuesta) => {
        console.log(respuesta);
        return <Result respuesta={respuesta} key={respuesta.numero} />;
      })}
      <Valoracion listaRespuestas={listaRespuestas} />

      <Link className="btn" to="/home">
        Ir a Home
      </Link>
    </div>
  );
};

export default Results;
