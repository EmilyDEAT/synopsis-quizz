import React from "react";

import './InputAnswer.css'

class InputAnswer extends React.Component {
  state = {
    answer: ""
  }

  handleChange = (event) => {
    this.setState({answer:event.target.value})
  }
  render() {
    return (
      <div className="answer">
        <input type="text" className="input-answer" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default InputAnswer;
