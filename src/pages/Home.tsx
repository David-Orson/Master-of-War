import React, { Component } from "react";
import Hand from "../components/Hand";

class HomePage extends Component<any, any> {
  render() {
    return this.props.playerData.map((data: any) => (
      <Hand key={data.player} data={data} />
    ));
  }
}

export default HomePage;
