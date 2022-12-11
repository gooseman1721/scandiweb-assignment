/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

const attributeNameStyle = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  font-feature-settings: "lnum" 1;
`;

const attributesContainerStyle = css`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const unselectedTextAttributeStyle = css`
  //width: 24px;
  padding-left: 3px;
  padding-right: 3px;
  height: 24px;
  border: 1px solid #1d1f22;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const selectedTextAttributeStyle = css`
  //width: 24px;
  padding-left: 3px;
  padding-right: 3px;
  height: 24px;
  border: 1px solid #1d1f22;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #1d1f22;
  color: #ffffff;
`;

export default class CartModalProductAttributeText extends Component {
  render() {
    const { attribute, attributeValues } = this.props;

    return (
      <div key={attribute.id}>
        <div css={attributeNameStyle}>{attribute.name + ":"}</div>
        <div css={attributesContainerStyle}>
          {attribute.items.map((selectedAttribute) => {
            const selected =
              attributeValues[attribute.name] === selectedAttribute.id;
            const textAttributeStyle = selected
              ? selectedTextAttributeStyle
              : unselectedTextAttributeStyle;

            return (
              <div key={selectedAttribute.id} css={textAttributeStyle}>
                {selectedAttribute.displayValue}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
