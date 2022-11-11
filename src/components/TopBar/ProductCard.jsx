/** @jsxImportSource @emotion/react */

import { Component } from "react";

import { css } from "@emotion/react";

const quickAddToCartStyle = css`
  position: relative;
  height: 52px;
  width: 52px;
  left: 303px;
  bottom: 102px;
  border-radius: 100%;
  background-color: #5ece7b;
  transition: 0.1s;
  opacity: 0;
`;

export default class ProductCard extends Component {
  render() {
    return (
      <div
        css={css`
          height: 444px;
          width: 386px;
          padding: auto;
          transition: 0.1s;
          &:hover {
            box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
            transition: 0.1s;
          }
          &:hover [data-comp="quickAddToCart"] {
            transition: 0.1s;
            opacity: 1;
          }
        `}
      >
        <div
          css={css`
            height: 330px;
            width: 354px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: auto;
          `}
        >
          <img
            src={this.props.productData.gallery}
            alt={this.props.productData.name}
            css={css`
              flex-shrink: 1;
              min-width: 100%;
            `}
          />
        </div>
        <div
          css={css`
            margin-top: 24px;
            margin-left: 16px;
            margin-right: 16px;
          `}
        >
          <div
            css={css`
              font-family: "Raleway";
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: normal;
              font-feature-settings: "lnum" 1;
            `}
          >
            {this.props.productData.name}
          </div>
          {/* <div>{this.props.productData.gallery}</div> */}
          <div
            css={css`
              font-family: "Raleway";
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 160%;
              font-feature-settings: "lnum" 1;
            `}
          >
            {this.props.productData.prices[0].currency.symbol}
            {this.props.productData.prices[0].amount}
          </div>
        </div>
        <div css={quickAddToCartStyle} data-comp="quickAddToCart"></div>
      </div>
    );
  }
}
