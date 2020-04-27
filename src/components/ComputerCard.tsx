import React, { Component } from "react";

class ComputerCard extends Component<any, any> {
  render() {
    console.log(this.props.data);
    return <div className="computer-container"></div>;
  }
}

export default ComputerCard;
