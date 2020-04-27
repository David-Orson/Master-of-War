import React, { Component } from "react";
import PlayerCard from "./PlayerCard";
import ComputerCard from "./ComputerCard";

class Hand extends Component<any, any> {
  render() {
    return (
      <div className="container">
        {this.props.data.player === "user"
          ? this.props.data.cards.map((value: any) => (
              <PlayerCard data={value} />
            ))
          : this.props.data.cards.map((value: any) => (
              <ComputerCard data={value} />
            ))}
      </div>
    );
  }
}

export default Hand;
