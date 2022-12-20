/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";
import { connect } from "react-redux";

import {
  selectCartPriceSum,
  selectCartAmount,
} from "../../features/product_data/cartSlice";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-left: 100px;
  margin-right: 100px;
  gap: 8px;
`;

const itemContainerStyle = css`
  display: flex;
`;

const itemNameStyle = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  width: 105px;
`;

const itemValueStyle = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  font-feature-settings: "lnum" 1;
`;

class CartPageSummary extends Component {
  render() {
    return (
      <div css={containerStyle}>
        <div css={itemContainerStyle}>
          <div css={itemNameStyle}>Tax 21%:</div>
          <div css={itemValueStyle}>
            {this.props.currency}
            {((this.props.cartPriceSum * 21) / 100).toFixed(2)}
          </div>
        </div>
        <div css={itemContainerStyle}>
          <div css={itemNameStyle}>Quantity:</div>
          <div css={itemValueStyle}>{this.props.cartAmount}</div>
        </div>
        <div css={itemContainerStyle}>
          <div css={itemNameStyle}>Total:</div>
          <div css={itemValueStyle}>
            {" "}
            {this.props.currency}
            {this.props.cartPriceSum}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    currency: state.currencies.selectedCurrency.symbol,
    cartAmount: selectCartAmount(state),
    cartPriceSum: selectCartPriceSum(state),
  };
};

export default connect(mapStateToProps)(CartPageSummary);
