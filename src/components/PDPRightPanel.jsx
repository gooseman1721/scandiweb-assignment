/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";

import { css } from "@emotion/react";

class PDPRightPanel extends Component {
  render() {
    return (
      <div
        css={css`
          margin-top: 80px;
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

          `}
        >
          {this.props.productDetails.name}
        </div>
      </div>
    );
  }
}



export default connect()(PDPRightPanel);
