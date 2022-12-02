/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";


export default class PDPAddToCartButton extends Component {
  handleClick() {
    this.props.onButtonClick();
  }

  render() {
    return (
      <div>
        {this.props.inStock ? (
          <button
            css={css`
              width: 100%;
              height: 52px;
              background-color: #5ece7b;
              color: white;
              font-family: "Raleway";
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 120%;
              border: none;
              transition: 100ms;
              &:hover {
                transition: 100ms;
                background-color: #89eba3;
                cursor: pointer;
              }
              &:active {
                background-color: #4eaf68;
              }
            `}
            onClick={() => this.handleClick()}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            css={css`
              width: 100%;
              height: 52px;
              background-color: #8f9691;
              color: white;
              font-family: "Raleway";
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 120%;
              border: none;
            `}
          >
            OUT OF STOCK
          </button>
        )}
      </div>
    );
  }
}
