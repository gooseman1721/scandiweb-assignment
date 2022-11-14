/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { connect } from "react-redux";

import { css } from "@emotion/react";

class PDPRightPanel extends Component {
  render() {
    return (
      <div
        css={css`
          margin-left: 50px;
          width: 292px
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
            font-feature-settings: "lnum" 1;
          `}
        >
          {this.props.productDetails.name}
        </div>
        <div>
          control panel
          <div>attributes</div>
          <div>price</div>
          <div>add to cart button</div>
          <div
            css={css`
              font-family: "Roboto";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 159.96%;
              color: #1d1f22;
            `}
            dangerouslySetInnerHTML={{
              __html: this.props.productDetails.description,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default connect()(PDPRightPanel);
