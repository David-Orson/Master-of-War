import React, { Component } from "react";

import HomePage from "./pages/Home";

import MyHeader from "./components/MyHeader";

class App extends Component {
  state = {
    playerData: [
      {
        player: "computer",
        cards: ["10", "7", "3"],
      },
      {
        player: "user",
        cards: ["8", "4", "2"],
      },
    ],
  };

  render() {
    return (
      <div>
        <MyHeader />
        <HomePage playerData={this.state.playerData} />
        <br />
      </div>
    );
  }
}

export default App;
