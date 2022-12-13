/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";
import { connect } from "react-redux";

import CartModalProductAttributes from "./CartModalProductAttributes";

class CartModalLeftPanel extends Component {
  render() {
    return (
      <div
        css={css`
          width: 136px;
          //max-height: 200px;
          // overflow-y: scroll;
        `}
      >
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 160%;
          `}
        >
          {this.props.productDetails.brand}

          {this.props.productDetails.name}
        </div>
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 160%;
            font-feature-settings: "lnum" 1;
          `}
        >
          {this.props.currency.symbol}
          {
            this.props.productDetails.prices.find((price) => {
              return price.currency.label === this.props.currency.label;
            }).amount
          }
        </div>

        <CartModalProductAttributes
          attributes={this.props.productDetails.attributes}
          attributeValues={this.props.productDetails.selectedAttributes}
        />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    currency: state.currencies.selectedCurrency,
  };
};

export default connect(mapStateToProps)(CartModalLeftPanel);

