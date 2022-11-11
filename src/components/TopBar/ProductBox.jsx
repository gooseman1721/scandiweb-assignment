import React, { Component } from "react";

export default class ProductBox extends Component {
  render() {
    return <div>{this.props.productData.name}</div>;
  }
}
