import React from "react";

import './InputAnswer.css'

class InputAnswer extends React.Component {
  render() {
    return (
        <input type="text" className="input-answer" onChange={this.props.value}/>
    );
  }
}

export default InputAnswer;
