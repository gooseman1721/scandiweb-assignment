/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";

import { css } from "@emotion/react";
import {
  addItem,
  addProductToCart,
} from "../../features/product_data/cartSlice";

import PDPAddToCartButton from "./PDPAddToCartButton";
import PDPAttributes from "./PDPAttributes";
import PDPPrice from "./PDPPrice";

class PDPRightPanel extends Component {
  constructor(props) {
    super(props);
    this.handleProductAttributeChange =
      this.handleProductAttributeChange.bind(this);
    this.handleAddToCartButtonClick =
      this.handleAddToCartButtonClick.bind(this);

    const defaultAttributeValues = () => {
      const attributeObj = {};
      this.props.productDetails.attributes.forEach((element) => {
        attributeObj[element.id] = element.items[0].id;
      });
      return attributeObj;
    };

    this.state = { productAttributesValues: defaultAttributeValues() };
  }

  handleProductAttributeChange(attribute_id, item_id) {
    this.setState({
      productAttributesValues: {
        ...this.state.productAttributesValues,
        [attribute_id]: item_id,
      },
    });
  }

  handleAddToCartButtonClick() {
    this.props.addProductToCart({
      product: this.props.productDetails,
      selectedAttributes: this.state.productAttributesValues,
    });
  }

  render() {
    console.log(this.state.productAttributesValues);

    return (
      <div
        css={css`
          margin-left: 50px;
          width: 292px;
        `}
      >
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            line-height: 27px;
            color: #1d1f22;
            margin-bottom: 8px;
          `}
        >
          {this.props.productDetails.brand}
        </div>
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 27px;
            color: #1d1f22;
            margin-top: 8px;
            margin-bottom: 43px;
            font-feature-settings: "lnum" 1;
          `}
        >
          {this.props.productDetails.name}
        </div>
        <div>
          <PDPAttributes
            attributes={this.props.productDetails.attributes}
            onProductAttributeChange={this.handleProductAttributeChange}
            attributeValues={this.state.productAttributesValues}
          />
          <PDPPrice
            currencySymbol={this.props.currency.symbol}
            productPrice={
              this.props.productDetails.prices.find((price) => {
                return price.currency.label === this.props.currency.label;
              }).amount
            }
          />
          <PDPAddToCartButton
            inStock={this.props.productDetails.inStock}
            onButtonClick={this.handleAddToCartButtonClick}
          />
          <div
            css={css`
              font-family: "Roboto";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 159.96%;
              color: #1d1f22;
              max-height: 280px;
              overflow-y: auto;
              margin-top: 40px;
            `}
            dangerouslySetInnerHTML={{
              __html: this.props.productDetails.description,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    currency: state.currencies.selectedCurrency,
  };
};

export default connect(mapStateToProps, { addItem, addProductToCart })(
  PDPRightPanel
);
