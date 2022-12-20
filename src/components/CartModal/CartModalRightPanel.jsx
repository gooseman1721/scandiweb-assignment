/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";

import {
  increaseProductCount,
  decreaseProductCount,
} from "../../features/product_data/cartSlice";

import { ReactComponent as PlusButton } from "../../svgs/plus-square.svg";
import { ReactComponent as MinusButton } from "../../svgs/minus-square.svg";
import { ReactComponent as BigPlusButton } from "../../svgs/plus-square-big.svg";
import { ReactComponent as BigMinusButton } from "../../svgs/minus-square-big.svg";

class CartModalRightPanel extends Component {
  handleIncreaseProductCount() {
    this.props.increaseProductCount(this.props.productDetails);
  }

  handleDecreaseProductCount() {
    this.props.decreaseProductCount(this.props.productDetails);
  }
  render() {
    const {
      containerStyle,
      buttonContainerStyle,
      plusMinusButtonsStyle,
      cartAmountStyle,
      imageContainerStyle,
      imageStyle,
    } = this.props.styling;

    const { productDetails, bigButtons } = this.props;

    return (
      <div css={containerStyle}>
        <div css={buttonContainerStyle}>
          <button
            css={plusMinusButtonsStyle}
            onClick={() => this.handleIncreaseProductCount()}
          >
            {bigButtons ? <BigPlusButton /> : <PlusButton />}
          </button>
          <div css={cartAmountStyle}>{productDetails.cartAmount}</div>

          <button
            css={plusMinusButtonsStyle}
            onClick={() => this.handleDecreaseProductCount()}
          >
            {bigButtons ? <BigMinusButton /> : <MinusButton />}
          </button>
        </div>
        <div css={imageContainerStyle}>
          <img
            src={productDetails.gallery[0]}
            alt={productDetails.name}
            css={imageStyle}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { increaseProductCount, decreaseProductCount })(
  CartModalRightPanel
);
