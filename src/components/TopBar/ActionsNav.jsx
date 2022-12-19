/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import CartButton from "./CartButton";
import CurrencySwitcher from "./CurrencySwitcher";

export default class ActionsNav extends Component {
  handleCartClick() {
    this.props.openCloseModal();
  }
  render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: right;
          align-items: center;
          flex-grow: 1;
          height: 78px;
          gap: 20px;
        `}
      >
        <div>
          <CurrencySwitcher />
        </div>
        <div onClick={() => this.handleCartClick()}>
          <CartButton />
        </div>
      </div>
    );
  }
}
