/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

import ProductCard from "./ProductCard";

export default class ProductCardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { productList: this.props.productList };
  }
  componentDidUpdate(prevProps) {
    if (this.props.productList !== prevProps.productList) {
      this.setState({ productList: this.props.productList });
    }
  }

  render() {
    return (
      <div
        css={css`
          display: grid;
          grid-template-columns: 33% 33% 33%;
          grid-gap: 40px;
          margin-left: 100px;
          margin-right: 100px;
          margin-top: 100px;
        `}
      >
        {this.state.productList.map((data, index) => (
          <ProductCard key={index} productData={data} />
        ))}
      </div>
    );
  }
}
