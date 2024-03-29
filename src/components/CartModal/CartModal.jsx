/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { css } from "@emotion/react";

import CartModalProduct from "./CartModalProduct";
import {
  selectCartPriceSum,
  selectCartAmount,
} from "../../features/product_data/cartSlice";

const viewBagStyle = css`
  width: 140px;
  height: 43px;
  border: 1px solid #1d1f22;
  background: #ffffff;
  color: #1d1f22;
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

const portalStyle = css`
  position: absolute;
  top: 78px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(57, 55, 72, 0.22);
  z-index: 1000;
  color: #1d1f22;
`;

const modalStyle = css`
  position: absolute;
  right: 73px;
  width: 325px;
  height: 677px;
  z-index: 1000;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const modalTitleStyle = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  margin-top: 32px;
  margin-left: 16px;
`;

const modalItemAmountStyle = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  font-feature-settings: "lnum" 1;
`;

const modalProductContainerStyle = css`
  flex-grow: 1;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #e7e6e6;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #67676d;
    border-radius: 5px;
  }
`;

const modalTotalValueContainer = css`
  margin-bottom: 32px;
  margin-left: 16px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const modalTotalString = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

const modalTotalValue = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  font-feature-settings: "lnum" 1;
  transform: translate(0px, -4px);
`;

const modalButtonsContainer = css`
  display: flex;
  justify-content: space-evenly;
  gap: 12px;
  margin-bottom: 32px;
  margin-left: 16.5px;
  margin-right: 16.5px;
`;

class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = { viewBagClicked: false };
  }

  handleCartClick() {
    this.props.openCloseModal();
  }

  handleViewBagClick() {
    this.setState({ viewBagClicked: true });
  }

  render() {
    const cartProductAmount = this.props.cartAmount;
    const cartProductPriceSum = this.props.cartPriceSum;

    if (this.props.isOpen) {
      return createPortal(
        <div
          css={portalStyle}
          style={{
            height: `calc(${
              document.getElementById("root").scrollHeight
            }px - 78px)`,
            width: `calc(${
              document.getElementById("root").scrollWidth
            }px)`,
          }}
          onClick={() => this.handleCartClick()}
        >
          <div
            css={modalStyle}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div css={modalTitleStyle}>
              My bag,{" "}
              <span css={modalItemAmountStyle}>
                {cartProductAmount} item{cartProductAmount === 1 ? "" : "s"}
              </span>
            </div>

            <div css={modalProductContainerStyle}>
              {this.props.cartContent.map((cartProduct, index) => (
                <CartModalProduct key={index} productDetails={cartProduct} />
              ))}
            </div>
            <div css={modalTotalValueContainer}>
              <div css={modalTotalString}>Total</div>
              <div css={modalTotalValue}>
                {this.props.currency.symbol}
                {cartProductPriceSum}
              </div>
            </div>
            <div css={modalButtonsContainer}>
              <button
                css={viewBagStyle}
                onClick={() => this.handleViewBagClick()}
              >
                VIEW BAG
              </button>
              <button css={checkOutButton}>CHECK OUT</button>
              {this.state.viewBagClicked && (
                <>
                  {this.setState({ viewBagClicked: false })}
                  {this.props.isOpen ? this.props.openCloseModal() : null}
                  <Navigate to={`cart/`} />
                </>
              )}
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
    currency: state.currencies.selectedCurrency,
    cartPriceSum: selectCartPriceSum(state),
    cartAmount: selectCartAmount(state),
  };
};

export default connect(mapStateToProps)(CartModal);
