/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";

import {
  increaseProductCount,
  decreaseProductCount,
} from "../../features/product_data/cartSlice";

import { ReactComponent as PlusButton } from "../../svgs/plus-square.svg";
import { ReactComponent as MinusButton } from "../../svgs/minus-square.svg";

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
    return (
      <div css={containerStyle}>
        <div css={buttonContainerStyle}>
          <button
            css={plusMinusButtonsStyle}
            onClick={() => this.handleIncreaseProductCount()}
          >
            <PlusButton />
          </button>
          <div css={cartAmountStyle}>
            {this.props.productDetails.cartAmount}
          </div>

          <button
            css={plusMinusButtonsStyle}
            onClick={() => this.handleDecreaseProductCount()}
          >
            <MinusButton />
          </button>
        </div>
        <div css={imageContainerStyle}>
          <img
            src={this.props.productDetails.gallery[0]}
            alt={this.props.productDetails.name}
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
