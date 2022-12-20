/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

const priceContainer = css`
  margin-bottom: 20px;
  margin-top: 10px;
`;

const priceString = css`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 10px;
`;

const priceValue = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  font-feature-settings: "lnum" 1;
`;

export default class PDPPrice extends Component {
  render() {
    return (
      <div css={priceContainer}>
        <div css={priceString}>PRICE:</div>
        <div css={priceValue}>
          {this.props.currencySymbol}
          {this.props.productPrice}
        </div>
      </div>
    );
  }
}
