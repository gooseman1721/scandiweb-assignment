/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { css } from "@emotion/react";
import CartModalProduct from "./CartModalProduct";

const viewBagStyle = css`
  width: 140px;
  height: 43px;
  border: 1px solid #1d1f22;
  background: #ffffff;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: 100ms;
  &:hover {
    background-color: #1d1f22;
    color: #ffffff;
    cursor: pointer;
    transition: 100ms;
  }
`;

const checkOutButton = css`
  width: 140px;
  height: 43px;
  background-color: #5ece7b;
  color: white;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
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
`;

class CartModal extends Component {
  render() {
    if (this.props.isOpen) {
      return createPortal(
        <div
          css={css`
            position: absolute;
            top: 78px;
            left: 0;
            right: 0;
            bottom: 0;
            height: calc(
              ${document.getElementById("root").scrollHeight}px - 78px
            );
            width: 100%;
            background-color: rgba(57, 55, 72, 0.22);
            z-index: 1000;
          `}
        >
          <div
            css={css`
              position: absolute;
              right: 73px;
              width: 325px;
              height: 677px;
              z-index: 1000;
              background-color: white;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}
          >
            CartModal
            {document.getElementById("root").scrollHeight}
            <div
              css={css`
                flex-grow: 1;
              `}
            >
              {this.props.cartContent.map((cartProduct) => (
                <CartModalProduct productDetails={cartProduct} />
              ))}
            </div>
            <div
              css={css`
                margin-bottom: 32px;
                margin-left: 16px;
                margin-right: 20px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <div
                css={css`
                  font-family: "Roboto";
                  font-style: normal;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 18px;
                  color: #1d1f22;
                `}
              >
                Total
              </div>
              <div
                css={css`
                  font-family: "Raleway";
                  font-style: normal;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 160%;
                  font-feature-settings: "lnum" 1;
                  color: #1d1f22;
                  transform: translate(0px, -4px);
                `}
              >
                symbol
                {this.props.cartContent
                  .reduce(
                    (cartValue, cartProduct) =>
                      (cartValue +=
                        cartProduct.prices[0].amount * cartProduct.cartAmount),
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: space-evenly;
                gap: 12px;
                margin-bottom: 32px;
                margin-left: 16.5px;
                margin-right: 16.5px;
              `}
            >
              <button css={viewBagStyle}>VIEW BAG</button>
              <button css={checkOutButton}>CHECK OUT</button>
            </div>
          </div>
        </div>,
        document.getElementById("portal")
      );
    }
  }
}

const mapStateToProps = function (state) {
  return {
    cartContent: state.cart.cartProducts,
  };
};

export default connect(mapStateToProps)(CartModal);
