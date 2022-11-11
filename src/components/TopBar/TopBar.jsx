/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import { css } from "@emotion/react";
import CategoryNav from "./CategoryNav";

export default class TopBar extends Component {
  render() {
    return (
      <div
        css={css`
          background-color: #ffffff;
          margin: auto;
          height: 80px;
          width: 1440px;
          top: 0;
        `}
      >
        <CategoryNav />
      </div>
    );
  }
}
