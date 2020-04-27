import React, { Component } from "react";

class Card extends Component<any, any> {
  render() {
    console.log(this.props);
    return <div className="container">{this.props.value}</div>;
  }
}

export default Card;
