/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

export default class PDPPrice extends Component {
  render() {
    return (
      <div
        css={css`
          margin-bottom: 20px;
          margin-top: 10px;
        `}
      >
        <div
          css={css`
            font-family: "Roboto Condensed";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 10px;
          `}
        >
          PRICE:
        </div>
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 18px;
            font-feature-settings: "lnum" 1;
          `}
        >
          {this.props.currencySymbol}
          {this.props.productPrice}
        </div>
      </div>
    );
  }
}
