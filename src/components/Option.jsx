import React from "react";

const Option = ({ answer, status, onChange, checked }) => {
  return (
    <label className={`question-container ${status}`} onChange={onChange}>
      <p className="answer">{answer}</p>
      <input type="radio" name="test" checked={checked} />
    </label>
  );
};

export default Option;
