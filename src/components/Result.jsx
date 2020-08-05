import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const Result = () => {
  return (
    <div className="question-container">
      <h1 className="answer">Pregunta</h1>
      <FaRegCheckCircle />
      <FaRegTimesCircle />
    </div>
  );
};

export default Result;
