import React, { useState, useEffect } from "react";
import "../components/Question.css";
import Option from "./Option";
import Results from "../pages/Results";

const Question = ({ question, total, next, current }) => {
  const [answerSelected, setAnswerSelected] = useState(null);
  const [reset, setReset] = useState(false);
  const [listaRespuestas, setListaRespuestas] = useState([]);

  useEffect(() => {
    if (answerSelected && reset) {
      setAnswerSelected(null);
      setReset(false);
    }
  }, [reset]);

  // answerSlected eligio el usuario
  //question.aswer correcta
  //option que es la opcion
  // correcta es la C y el usuario dice la B es incorrecta
  //  el usuario no lo eligio pero no es la correcta => blanco
  //  el usuario lo eligio pero no es la correcata => error
  // el usuario no lo eligio pero es correcta => corracto
  // el usurio lo eligio pero es correcta => correcto
  const getStatus = (option) => {
    // cuando se renderiza por primara vez se muestran todos en blanco

    if (!answerSelected) return "";

    if (option == question.answer) return "correcto";

    return answerSelected == option ? "incorrecto" : "";
  };

  const onSelectOption = (option) => {
    if (!answerSelected) {
      setAnswerSelected(option);
    }
  };

  const handleNextQuestion = () => {
    if (current + 1 <= total) {
      setListaRespuestas([
        ...listaRespuestas,
        { numero: current + 1, correcta: answerSelected == question.answer },
      ]);
      console.log(listaRespuestas);
      next(current + 1);
      setReset(true);
    }
  };

  if (current + 1 <= total) {
    return (
      <div className="card-question">
        <p className="question-title">{question.categoryId}</p>
        <p className="question-subtitle">
          Pregunta {current + 1}/{total}
        </p>
        <p className="question">{question.question}</p>
        <Option
          onChange={() => onSelectOption("A")}
          answer={question.options.A}
          status={getStatus("A")}
          checked={answerSelected == "A"}
        />
        <Option
          onChange={() => onSelectOption("B")}
          answer={question.options.B}
          status={getStatus("B")}
          checked={answerSelected == "B"}
        />
        <Option
          onChange={() => onSelectOption("C")}
          answer={question.options.C}
          status={getStatus("C")}
          checked={answerSelected == "C"}
        />
        <Option
          onChange={() => onSelectOption("D")}
          answer={question.options.D}
          status={getStatus("D")}
          checked={answerSelected == "D"}
        />
        <button className="btn" onClick={handleNextQuestion}>
          Siguiente
        </button>
      </div>
    );
  }

  return <Results listaRespuestas={listaRespuestas} />;
};

export default Question;
