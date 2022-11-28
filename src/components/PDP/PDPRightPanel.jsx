/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";

import { css } from "@emotion/react";
import PDPAddToCartButton from "./PDPAddToCartButton";
import PDPAttributes from "./PDPAttributes";

class PDPRightPanel extends Component {
  constructor(props) {
    super(props);
    this.handleProductAttributeChange =
      this.handleProductAttributeChange.bind(this);
    this.state = { productAttributesValues: {} };
  }

  handleProductAttributeChange(attribute_id, item_id) {
    this.setState({
      productAttributesValues: {
        ...this.state.productAttributesValues,
        [attribute_id]: item_id,
      },
    });
  }
  render() {
    const defaultAttributeValues = () => {
      const attributeObj = {};
      this.props.productDetails.attributes.forEach((element) => {
        attributeObj[element.id] = element.items[0].id;
      });
      return attributeObj;
    };
    const attributeValues =
      Object.keys(this.state.productAttributesValues).length === 0
        ? defaultAttributeValues()
        : {
            ...defaultAttributeValues(),
            ...this.state.productAttributesValues,
          };

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
            attributeValues={attributeValues}
          />
          <div>{this.props.productDetails.prices[0].amount}</div>
          <PDPAddToCartButton inStock={this.props.productDetails.inStock} />
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

export default connect()(PDPRightPanel);
