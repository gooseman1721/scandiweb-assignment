/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { Outlet as RouterOutlet } from "react-router-dom";
// import { css } from "@emotion/react";

import TopBar from "./components/TopBar/TopBar";

export default class App extends Component {
  render() {
    return (
      <div
        // css={css`
        //   background-color: #e5e5e5;
        // `}
      >
        <TopBar />
        <RouterOutlet />
      </div>
    );
  }
}
