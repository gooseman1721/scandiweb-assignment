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
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const unselectedSwatchAttributeStyle = css`
  width: 16px;
  height: 16px;
  margin: 1px;
  z-index: 2;
  position: relative;
  display: flex;
  box-shadow: 1px 4px 10px 4px rgba(161, 166, 172, 0.384);
`;

const selectedSwatchAttributeStyle = css`
  width: 16px;
  height: 16px;
  z-index: 2;
  margin: 1px;
  display: flex;
  box-shadow: 4px 4px 10px 4px rgba(161, 166, 172, 0.384);
`;

const selectedSwatchBorderBoxStyle = css`
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border: 1px solid #5ece7b;
  z-index: 1;
  align-items: center;
  justify-items: center;
`;

const unselectedSwatchBorderBoxStyle = css`
  width: 16px;
  height: 16px;
  background-color: #ffffff11;
  border: 1px solid #ffffff11;
  z-index: 1;
  align-items: center;
  justify-items: center;
`;

export default class CartModalProductAttributeSwatch extends Component {
  render() {
    const { attribute, attributeValues } = this.props;

    return (
      <div key={attribute.id}>
        <div css={attributeNameStyle}>{attribute.name + ":"}</div>
        <div css={attributesContainerStyle}>
          {attribute.items.map((selectedAttribute) => {
            const selected =
              attributeValues[attribute.name] === selectedAttribute.id;
            const swatchBorderBoxStyle = selected
              ? selectedSwatchBorderBoxStyle
              : unselectedSwatchBorderBoxStyle;
            const swatchAttributeStyle = selected
              ? selectedSwatchAttributeStyle
              : unselectedSwatchAttributeStyle;

            return (
              <div key={selectedAttribute.id} css={swatchBorderBoxStyle}>
                <div
                  css={css`
                    ${swatchAttributeStyle}
                    background-color: ${selectedAttribute.value};
                  `}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
