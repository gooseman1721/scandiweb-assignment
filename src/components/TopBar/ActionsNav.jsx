import React, { Component } from "react";
import CartButton from "./CartButton";

export default class ActionsNav extends Component {
  handleCartClick() {
    this.props.openCloseModal();
  }
  render() {
    return (
      <>
        <div>Currency</div>
        <div onClick={() => this.handleCartClick()}>
          <CartButton />
        </div>
      </>
    );
  }
}
