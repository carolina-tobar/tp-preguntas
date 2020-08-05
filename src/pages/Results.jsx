import React from "react";
import "../pages/Results.css";
import Result from "../components/Result";

const Results = ({ listaRespuestas }) => {
  // const valoracionResultado = (porcentaje) => {
  //   if (porcentaje < 25) {
  //     return "seguí intentando";
  //   }
  //   if (porcentaje >= 25 && porcentaje < 50) {
  //     return "regular";
  //   }
  //   if (porcentaje >= 50 && porcentaje < 75) {
  //     return "bueno";
  //   }
  //   if (porcentaje >= 75 && porcentaje < 100) {
  //     return "excelentes";
  //   }
  // };
  return (
    <div className="container-results">
      <p className="results-title">Categoría</p>
      <p className="results-subtitle results-mod">Resultados</p>
      {listaRespuestas.map((respuesta) => {
        console.log(respuesta);
        return <Result respuesta={respuesta} />;
      })}
      <p className="answer puntaje centrado">Puntaje</p>
      <p className="answer grande centrado">
        Resultado
        <span className="porcentaje">
          {(listaRespuestas.filter((respuesta) => respuesta.correcta).length *
            100) /
            listaRespuestas.length}
          %
        </span>
      </p>
      <button className="btn">Ir a Home</button>
    </div>
  );
};

export default Results;
