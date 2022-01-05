import React, { Component } from "react";
import Gumball from "./components/Gumball";
import "./assets/App.css";
import "./assets/index.css";
import GumballMachine from "./GumballMachine/GumballMachine";

class App extends Component {
  constructor() {
    super();
    this.gumballMachine = new GumballMachine(6);
  }

  render() {
    return <Gumball gumballMachine={this.gumballMachine}></Gumball>;
  }
}

export default App;
