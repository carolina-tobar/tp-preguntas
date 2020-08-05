import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const Result = ({ respuesta: { numero, correcta } }) => {
  return (
    <div className="question-container question-container-results">
      <h1 className="answer">Pregunta {numero}</h1>
      {correcta ? (
        <FaRegCheckCircle className="checkmark" />
      ) : (
        <FaRegTimesCircle className="wrong-answer" />
      )}
    </div>
  );
};

export default Result;
