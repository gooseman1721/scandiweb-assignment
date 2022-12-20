/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import CartModalLeftPanel from "../CartModal/CartModalLeftPanel";
import CartModalRightPanel from "../CartModal/CartModalRightPanel";

const rightPanelStyling = {
  containerStyle: css`
    display: flex;
  `,
  buttonContainerStyle: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
  `,
  plusMinusButtonsStyle: css`
    height: 45px;
    width: 45px;
    padding: 0;
    background-color: #ffffff11;
    border: 0px;
    &:hover {
      cursor: pointer;
    }
  `,
  cartAmountStyle: css`
    justify-content: center;
    text-align: center;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
    color: #1d1f22;
  `,
  imageContainerStyle: css`
    height: 288px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 1;
  `,
  imageStyle: css`
    height: 100%;
    width: 100%;
    object-fit: scale-down;
    z-index: 1;
  `,
};

const leftPanelStyling = {
  containerStyle: css`
    width: 500px;
  `,
  brandNameStyle: css`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: #1d1f22;
  `,
  productNameStyle: css`
    margin-top: 16px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    color: #1d1f22;
  `,
  priceStyle: css`
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    font-feature-settings: "lnum" 1;
  `,
};

const attributesStyling = {
  attributeNameStyle: css`
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    font-feature-settings: "lnum" 1;
  `,
  attributesContainerStyleText: css`
    display: flex;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 24px;
  `,
  attributesContainerStyleSwatch: css`
    display: flex;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 24px;
  `,
  unselectedSwatchAttributeStyle: css`
    width: 32px;
    height: 32px;
    margin: 1px;
    z-index: 2;
    position: relative;
    display: flex;
    box-shadow: 1px 4px 10px 4px rgba(161, 166, 172, 0.384);
  `,
  selectedSwatchAttributeStyle: css`
    width: 32px;
    height: 32px;
    background-color: #ffffff;
    z-index: 1;
    margin: 1px;
    align-items: center;
    justify-items: center;
    box-shadow: 1px 4px 10px 4px rgba(161, 166, 172, 0.384);
  `,
  unselectedSwatchBorderBoxStyle: css`
    width: 34px;
    height: 34px;
    background-color: #ffffff11;
    border: 1px solid #ffffff11;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  selectedSwatchBorderBoxStyle: css`
    width: 34px;
    height: 34px;
    background-color: #ffffff;
    border: 1px solid #5ece7b;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  unselectedTextAttributeStyle: css`
    padding-left: 3px;
    padding-right: 3px;
    width: 63px;
    height: 45px;
    border: 1px solid #1d1f22;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
  `,
  selectedTextAttributeStyle: css`
    padding-left: 3px;
    padding-right: 3px;
    width: 63px;
    height: 45px;
    border: 1px solid #1d1f22;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #1d1f22;
    color: #ffffff;
  `,
};

const spacerLineStyle = css`
  background: #e5e5e5;
  height: 1px;
  border-style: none;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const productContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default class CartProduct extends Component {
  render() {
    return (
      <>
        {this.props.isFirst && <hr css={spacerLineStyle}></hr>}
        <div css={productContainer}>
          <CartModalLeftPanel
            productDetails={this.props.productDetails}
            styling={leftPanelStyling}
            attributesStyling={attributesStyling}
          />
          <CartModalRightPanel
            productDetails={this.props.productDetails}
            styling={rightPanelStyling}
            bigButtons={true}
            imageSwitcher={true}
          />
        </div>
        <hr css={spacerLineStyle}></hr>
      </>
    );
  }
}
