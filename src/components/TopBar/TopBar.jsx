/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import { css } from "@emotion/react";
import CategoryNav from "./CategoryNav";
import Logo from "./Logo";

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
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <CategoryNav />
        <Logo />
        <div
          css={css`
            flex-grow: 1;
            margin-right: 100px;
          `}
        >
          {" "}
          placeholder
        </div>
      </div>
    );
  }
}
