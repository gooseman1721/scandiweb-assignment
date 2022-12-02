/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { css } from "@emotion/react";

class CartModal extends Component {
  render() {
    if (this.props.isOpen) {
      return createPortal(
        <div
          css={css`
            position: absolute;
            top: 78px;
            left: 0;
            right: 0;
            bottom: 0;
            height: calc(${document.getElementById("root").scrollHeight}px - 78px);
            width: 100%;
            background-color: rgba(57, 55, 72, 0.22);
            z-index: 1000;
          `}
        >
          <div
            css={css`
              background-color: aliceblue;
              position: absolute;
              right: 73px;
              width: 325px;
              height: 677px;
              z-index: 1000;
            `}
          >
            CartModal
            {document.getElementById("root").scrollHeight}
            {JSON.stringify(this.props.cartContent)}
          </div>
        </div>,
        document.getElementById("portal")
      );
    }
  }
}

const mapStateToProps = function (state) {
  return {
    cartContent: state.cart.cartProducts,
  };
};

export default connect(mapStateToProps)(CartModal);