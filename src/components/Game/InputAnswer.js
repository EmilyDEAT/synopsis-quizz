import React from "react";

import "./InputAnswer.css";

const InputAnswer = ({ onChange }) => {
  return (
    <input
      type="text"
      className="input-answer"
      onChange={onChange}
    />
  );
};

export default InputAnswer;
