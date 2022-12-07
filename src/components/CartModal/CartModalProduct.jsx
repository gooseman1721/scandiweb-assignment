/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import CartModalLeftPanel from "./CartModalLeftPanel";
import { ReactComponent as PlusButton } from "../../svgs/plus-square.svg";
import { ReactComponent as MinusButton } from "../../svgs/minus-square.svg";


export default class CartModalProduct extends Component {
  render() {
    return (
      <div
        css={css`
          display: flex;
          margin-left: 16px;
          margin-right: 16px;
          margin-top: 40px;
          height: 190px;
        `}
      >
        <CartModalLeftPanel productDetails={this.props.productDetails} />
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              max-height: 190px;
            `}
          >
            <button
              css={css`
                height: 24px;
                width: 24px;
                padding: 0;
                background-color: #ffffff11;
                border: 0px;
                &:hover {
                  cursor: pointer;
                }
              `}
            >
              <PlusButton />
            </button>
            <div
              css={css`
                justify-content: center;
                text-align: center;
                font-family: "Raleway";
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 160%;
                color: #1d1f22;
              `}
            >
              {this.props.productDetails.cartAmount}
            </div>

            <button
              css={css`
                height: 24px;
                width: 24px;
                padding: 0;
                background-color: #ffffff11;
                border: 0px;
                &:hover {
                  cursor: pointer;
                }
              `}
            >
              <MinusButton />
            </button>
          </div>
          <div
            css={css`
              height: 190px;
              width: 121px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 8px;
            `}
          >
            <img
              src={this.props.productDetails.gallery[0]}
              alt={this.props.productDetails.name}
              css={css`
                height: 100%;
                width: 100%;
                object-fit: scale-down;
              `}
            />
          </div>
        </div>
      </div>
    );
  }
}
