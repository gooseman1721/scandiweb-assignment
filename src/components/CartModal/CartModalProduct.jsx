/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import CartModalLeftPanel from "./CartModalLeftPanel";
import CartModalRightPanel from "./CartModalRightPanel";

const rightPanelStyling = {
  containerStyle: css`
    display: flex;
  `,
  buttonContainerStyle: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 200px;
  `,
  plusMinusButtonsStyle: css`
    height: 24px;
    width: 24px;
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
    font-size: 16px;
    line-height: 160%;
    color: #1d1f22;
  `,
  imageContainerStyle: css`
    height: 190px;
    width: 121px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: auto;
  `,
  imageStyle: css`
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  `,
};

const leftPanelStyling = {
  containerStyle: css`
    width: 136px;
  `,
  brandNameStyle: css`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
  `,
  productNameStyle: css`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
  `,
  priceStyle: css`
    margin-bottom: 8px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    font-feature-settings: "lnum" 1;
  `,
};

const attributesStyling = {
  attributeNameStyle: css`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings: "lnum" 1;
  `,
  attributesContainerStyleText: css`
    display: flex;
    gap: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  `,
  attributesContainerStyleSwatch: css`
    display: flex;
    gap: 7px;
    margin-top: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  `,
  unselectedSwatchAttributeStyle: css`
    width: 16px;
    height: 16px;
    margin: 1px;
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-items: center;
    box-shadow: 1px 4px 10px 4px rgba(161, 166, 172, 0.384);
  `,
  selectedSwatchAttributeStyle: css`
    width: 16px;
    height: 16px;
    margin: 1px;
    background-color: #ffffff;
    z-index: 1;
    align-items: center;
    justify-items: center;
    box-shadow: 1px 4px 10px 4px rgba(161, 166, 172, 0.384);
  `,
  unselectedSwatchBorderBoxStyle: css`
    width: 16px;
    height: 16px;
    margin: 1px;
    background-color: #ffffff11;
    border: 1px solid #ffffff11;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  selectedSwatchBorderBoxStyle: css`
    width: 18px;
    height: 18px;
    margin: 1px;
    background-color: #ffffff;
    border: 1px solid #5ece7b;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  unselectedTextAttributeStyle: css`
    padding-left: 3px;
    padding-right: 3px;
    height: 24px;
    border: 1px solid #1d1f22;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    align-items: center;
    justify-content: center;
    display: flex;
  `,
  selectedTextAttributeStyle: css`
    padding-left: 3px;
    padding-right: 3px;
    height: 24px;
    border: 1px solid #1d1f22;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #1d1f22;
    color: #ffffff;
  `,
};

const containerStyle = css`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 40px;
  min-height: 100px;
`;

export default class CartModalProduct extends Component {
  render() {
    return (
      <div css={containerStyle}>
        <CartModalLeftPanel
          productDetails={this.props.productDetails}
          styling={leftPanelStyling}
          attributesStyling={attributesStyling}
        />
        <CartModalRightPanel
          productDetails={this.props.productDetails}
          styling={rightPanelStyling}
        />
      </div>
    );
  }
}
