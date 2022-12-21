import React, { Component } from "react";

import { Outlet as RouterOutlet } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <RouterOutlet />
      </div>
    );
  }
}
