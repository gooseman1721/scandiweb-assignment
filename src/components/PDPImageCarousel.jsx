/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

export default class PDPImageCarousel extends Component {
  render() {
    return (
      <div>
        <div
          css={css`
            height: 511px;
            width: 610px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: auto;
          `}
        >
          <img
            src={this.props.productDetails.gallery[0]}
            alt={this.props.productDetails.name}
            css={css`
              flex-shrink: 1;
              max-height: 100%;
              max-width: 100%;
            `}
          />
        </div>
      </div>
    );
  }
}
