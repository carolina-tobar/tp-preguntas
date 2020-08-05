import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Question from "../components/Question";
import axios from "axios";

const Questions = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://5f280966f5d27e001612e9e3.mockapi.io/categories/${id}/questions`
      )
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {questions && (
        <Question
          total={questions.length}
          question={questions[current]}
          next={setCurrent}
          current={current}
        />
      )}
    </div>
  );
};

export default Questions;
