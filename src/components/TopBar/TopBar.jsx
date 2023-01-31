/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import { css } from "@emotion/react";
import CategoryNav from "./CategoryNav";
import ActionsNav from "./ActionsNav";
import CartModal from "../CartModal/CartModal";
import { ReactComponent as ShopLogo } from "../../svgs/logo.svg";

const topBarStyle = css`
  background-color: #ffffff;
  margin: auto;
  height: 80px;
  width: 1440px;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2000;
`;

const cartModalContainerStyle = css`
  display: flex;
  flex-direction: row;
  margin-right: 100px;
`;

const logoStyle = css`
  margin: auto;
  margin-right: 100px;
`;

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
        css={topBarStyle}
        onClick={
          this.state.modalOpen ? () => this.handleCartButtonClick() : null
        }
      >
        <CategoryNav
          openCloseModal={this.handleCartButtonClick}
          modalIsOpen={this.state.modalOpen}
        />
        <div css={logoStyle}>
          <ShopLogo />
        </div>
        <ActionsNav openCloseModal={this.handleCartButtonClick} />
        <div css={cartModalContainerStyle}>
          <CartModal
            isOpen={this.state.modalOpen}
            openCloseModal={this.handleCartButtonClick}
          />
        </div>
      </div>
    );
  }
}
