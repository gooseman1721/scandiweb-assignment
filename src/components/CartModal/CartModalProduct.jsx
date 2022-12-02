import React, { Component } from 'react'

export default class CartModalProduct extends Component {
  render() {
    return (
      <div>
        {this.props.productDetails.id} {this.props.productDetails.cartAmount}
      </div>
    )
  }
}
