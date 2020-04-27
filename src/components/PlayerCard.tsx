import React, { Component } from "react";

class PlayerCard extends Component<any, any> {
  render() {
    return <div className="container">{this.props.data}</div>;
  }
}

export default PlayerCard;
