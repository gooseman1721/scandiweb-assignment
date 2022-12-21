/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";
import { connect } from "react-redux";
import CartProduct from "../components/CartPage/CartPageProduct";
import CartPageSummary from "../components/CartPage/CartPageSummary";
import CartPageButton from "../components/CartPage/CartPageButton";

const cartPageContainer = css`
  width: 1440px;
  height: 1395px;
  margin: auto;
  background-color: #ffffff;
`;

const cartPageTitle = css`
  margin-left: 100px;
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #1d1f22;
`;

const cartPageProductsContainer = css`
  margin-left: 100px;
  margin-right: 100px;
`;

class CartPage extends Component {
  render() {
    return (
      <div css={cartPageContainer}>
        <div css={cartPageTitle}>CART</div>
        <div css={cartPageProductsContainer}>
          {this.props.cartContent.map((product, index) => (
            <CartProduct
              key={index}
              isFirst={index === 0}
              productDetails={product}
            />
          ))}
        </div>
        <CartPageSummary />
        <CartPageButton />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    cartContent: state.cart.cartProducts,
  };
};

export default connect(mapStateToProps)(CartPage);
