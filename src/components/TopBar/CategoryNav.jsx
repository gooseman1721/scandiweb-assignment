/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

export default class CategoryNav extends Component {
  render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;

          width: 234px;
          height: 56px;
          left: 101px;
          bottom: 0px;
        `}
      >
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 120%;
          `}
        >
          First
        </div>
        <div>Second</div>
        <div>Third</div>
      </div>
    );
  }
}
