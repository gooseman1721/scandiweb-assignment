/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";
import { connect } from "react-redux";

import { ReactComponent as CartLogo } from "../../svgs/empty-cart-black.svg";

const cartCountCircleStyle = css`
  height: 20px;
  width: 20px;
  position: relative;
  left: 10px;
  bottom: 10px;
  z-index: 3;
  background: #1d1f22;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  border-radius: 60px;
`;

class CartButton extends Component {
  render() {
    return (
      <div
        css={css`
          align-items: center;
          justify-content: center;
          display: flex;
          width: 20px;
          &:hover {
            cursor: pointer;
          }
        `}
      >
        <div
          css={css`
            z-index: 2;
            position: absolute;
          `}
        >
          <CartLogo />
        </div>
        {this.props.cartAmount !== 0 ? (
          <div css={cartCountCircleStyle}>{this.props.cartAmount}</div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    productDetailsIdList: state.productDetails.idList,
    cartAmount: state.cart.cartProducts.reduce(
      (cartValue, cartProduct) => (cartValue += cartProduct.cartAmount),
      0
    ),
  };
};

export default connect(mapStateToProps)(CartButton);
