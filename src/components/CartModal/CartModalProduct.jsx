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
          //margin-right: 16px;
        `}
      >
        <CartModalLeftPanel productDetails={this.props.productDetails} />
        <div
          css={css`
            display: flex;
            gap: 8px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              
            `}
          >
            <button
              css={css`
                height: 24px;
                width: 24px;
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
                margin: auto;
              `}
            >
              {this.props.productDetails.cartAmount}
            </div>

            <button
              css={css`
                height: 24px;
                width: 24px;
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
      </div>
    );
  }
}
