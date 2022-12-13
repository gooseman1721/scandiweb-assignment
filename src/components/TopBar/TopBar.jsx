/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import { css } from "@emotion/react";
import CategoryNav from "./CategoryNav";
import ActionsNav from "./ActionsNav";
import Logo from "./Logo";
import CartModal from "../CartModal/CartModal";

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.handleCartButtonClick = this.handleCartButtonClick.bind(this);
    this.state = {
      modalOpen: false,
    };
  }

  handleCartButtonClick() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <div
        css={css`
          background-color: #ffffff;
          margin: auto;
          height: 80px;
          width: 1440px;
          top: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          z-index: 2000;
        `}
      >
        <CategoryNav
          openCloseModal={this.handleCartButtonClick}
          modalIsOpen={this.state.modalOpen}
        />
        <Logo />
        <ActionsNav openCloseModal={this.handleCartButtonClick} />
        <div
          css={css`
            display: flex;
            flex-direction: row;
            //flex-grow: 1;
            margin-right: 100px;
          `}
        >
          {/* <ActionsNav openCloseModal={this.handleCartButtonClick} /> */}

          <CartModal
            isOpen={this.state.modalOpen}
            openCloseModal={this.handleCartButtonClick}
          />
        </div>
      </div>
    );
  }
}
