/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";

import CartProductAttributes from "../CartProductAttributes";

class CartModalLeftPanel extends Component {
  render() {
    const { currency, productDetails, attributesStyling } = this.props;
    const { containerStyle, brandNameStyle, productNameStyle, priceStyle } =
      this.props.styling;
    return (
      <div css={containerStyle}>
        <div css={brandNameStyle}>{productDetails.brand}</div>
        <div css={productNameStyle}>{productDetails.name}</div>
        <div css={priceStyle}>
          {currency.symbol}
          {
            productDetails.prices.find((price) => {
              return price.currency.label === currency.label;
            }).amount
          }
        </div>

        <CartProductAttributes
          attributes={productDetails.attributes}
          attributeValues={productDetails.selectedAttributes}
          attributesStyling={attributesStyling}
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
