/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

export default class CartModalLeftPanel extends Component {
  render() {
    return (
      <div css={css`
        width: 136px;
      `}>
        <div>
          {this.props.productDetails.brand}

          {this.props.productDetails.name}
        </div>
        <div>
          {this.props.productDetails.prices[0].currency.symbol}{" "}
          {this.props.productDetails.prices[0].amount}
        </div>
      </div>
    );
  }
}
