import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component<any, any> {
  render() {
    return (
      <div className="container">
        {this.props.data.cards.map((card: any) => (
          <Card value={card} />
        ))}
      </div>
    );
  }
}

export default Hand;
