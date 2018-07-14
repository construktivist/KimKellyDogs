import React from "react"
import Background from "./Background.js"

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <Background />
        <div className="header">
          <h1>Home</h1>
        </div>
        <div className="home-container">
        </div>
      </div>

    );
  }
}
