import React, { Component } from "react";

class HomePage extends Component<any, any> {
  render() {
    return (
      <main className="container">
        {this.props.playerData.map((data: any) => (
          <h3>{data.p1}</h3>
        ))}
      </main>
    );
  }
}

export default HomePage;
