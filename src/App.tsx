import React, { Component } from "react";

import HomePage from "./pages/Home";

import MyHeader from "./components/MyHeader";

class App extends Component {
  state = {
    playerData: [
      {
        p1: "hi",
        p2: "yes",
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
