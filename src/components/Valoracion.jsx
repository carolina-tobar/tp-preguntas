import React from "react";

const Valoracion = ({ listaRespuestas }) => {
  const valoracionResultado = (porcentaje) => {
    if (porcentaje < 25) {
      return "seguí intentando";
    }
    if (porcentaje >= 25 && porcentaje < 50) {
      return "regular";
    }
    if (porcentaje >= 50 && porcentaje < 75) {
      return "bueno";
    }
    if (porcentaje >= 75 && porcentaje < 100) {
      return "excelente";
    }
  };

  const porcentaje =
    (listaRespuestas.filter((respuesta) => respuesta.correcta).length * 100) /
    listaRespuestas.length;

  return (
    <div>
      <p className="answer puntaje centrado">Puntaje</p>
      <p className="answer grande centrado">
        Resultado
        <span className="porcentaje">
          {porcentaje}% - {valoracionResultado(porcentaje)}
        </span>
      </p>
    </div>
  );
};

export default Valoracion;
