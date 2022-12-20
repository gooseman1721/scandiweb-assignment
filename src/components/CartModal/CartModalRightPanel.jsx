/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/react";

import {
  increaseProductCount,
  decreaseProductCount,
} from "../../features/product_data/cartSlice";

import { ReactComponent as PlusButton } from "../../svgs/plus-square.svg";
import { ReactComponent as MinusButton } from "../../svgs/minus-square.svg";
import { ReactComponent as BigPlusButton } from "../../svgs/plus-square-big.svg";
import { ReactComponent as BigMinusButton } from "../../svgs/minus-square-big.svg";
import { ReactComponent as ImageArrow } from "../../svgs/cart-image-chevron.svg";

class CartModalRightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      imageNumber: this.props.productDetails.gallery.length - 1,
    };
  }

  handleIncreaseProductCount() {
    this.props.increaseProductCount(this.props.productDetails);
  }

  handleDecreaseProductCount() {
    this.props.decreaseProductCount(this.props.productDetails);
  }

  handleNextImage() {
    if (this.state.currentImage === this.state.imageNumber) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState({ currentImage: this.state.currentImage + 1 });
    }
  }

  handlePreviousImage() {
    if (this.state.currentImage === 0) {
      this.setState({ currentImage: this.state.imageNumber });
    } else {
      this.setState({ currentImage: this.state.currentImage - 1 });
    }
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

    const { productDetails, bigButtons, imageSwitcher } = this.props;

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
            src={productDetails.gallery[this.state.currentImage]}
            alt={productDetails.name}
            css={imageStyle}
          />
          {imageSwitcher && this.state.imageNumber > 1 && (
            <div
              css={css`
                display: flex;
                //gap: 8px;
                position: absolute;
                min-width: 200px;
                min-height: 288px;
                z-index: 5;
              `}
            >
              <button
                css={css`
                  position: relative;
                  left: 160px;
                  top: 248px;
                  width: 24px;
                  height: 24px;
                  padding: 0;
                  display: flex;

                  justify-content: center;
                  align-items: center;

                  background: rgba(0, 0, 0, 0.73);
                  transform: matrix(-1, 0, 0, 1, 0, 0);
                  border: none;
                  &:hover {
                    cursor: pointer;
                  }
                `}
                onClick={() => this.handleNextImage()}
              >
                <ImageArrow />
              </button>
              <button
                css={css`
                  position: relative;
                  left: 104px;
                  top: 248px;
                  width: 24px;
                  height: 24px;
                  padding: 0;
                  display: flex;

                  justify-content: center;
                  align-items: center;

                  background: rgba(0, 0, 0, 0.73);
                  transform: matrix(-1, 0, 0, 1, 0, 0);

                  border: none;
                  &:hover {
                    cursor: pointer;
                  }
                `}
                onClick={() => this.handlePreviousImage()}
              >
                <ImageArrow
                  css={css`
                    transform: rotate(180deg);
                  `}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(null, { increaseProductCount, decreaseProductCount })(
  CartModalRightPanel
);
