import React from "react";

import './InputAnswer.css'

class InputAnswer extends React.Component {
  textInput = React.createRef()

  render() {
    return (
        <input ref={this.textInput} type="text" className="input-answer" onChange={this.props.onChange} />
    );
  }
}

export default InputAnswer;
