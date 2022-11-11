/** @jsxImportSource @emotion/react */

import { Component } from "react";

import { css } from "@emotion/react";

export default class ProductCard extends Component {
  render() {
    return (
      <div
        css={css`
          height: 444px;
          width: 386px;
          padding: auto;
          /* border: 2px dotted; */
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
        <div css={css`
          margin-top: 24px;
        `}>
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
      </div>
    );
  }
}
