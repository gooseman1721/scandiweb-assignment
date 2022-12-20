/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

const orderButton = css`
  width: 279px;
  height: 43px;
  margin-left: 100px;
  margin-top: 16px;
  margin-bottom: 100px;
  background-color: #5ece7b;
  color: white;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  border: none;
  transition: 100ms;
  &:hover {
    transition: 100ms;
    background-color: #89eba3;
    cursor: pointer;
  }
  &:active {
    background-color: #4eaf68;
  }
`;

export default class CartPageButton extends Component {
  render() {
    return <button css={orderButton}>ORDER</button>;
  }
}
