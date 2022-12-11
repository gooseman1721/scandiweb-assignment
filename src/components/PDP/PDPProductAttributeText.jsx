/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

const attributeNameStyle = css`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
`;

const attributesContainerStyle = css`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  margin-bottom: 24px;
`;
const unselectedTextAttributeStyle = css`
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  //text-align: center;
  transition: 100ms;
  &:hover {
    background-color: #1d1f22;
    color: #ffffff;
    cursor: pointer;
    transition: 100ms;
  }
`;

const selectedTextAttributeStyle = css`
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #1d1f22;
  color: #ffffff;
`;

export default class PDPProductAttributeText extends Component {
  handleAttributeClick(attribute_id, item_id) {
    this.props.onProductAttributeChange(attribute_id, item_id);
  }

  render() {
    const { attribute, attributeValues } = this.props;

    return (
      <div key={attribute.id}>
        <div css={attributeNameStyle}>{attribute.name.toUpperCase() + ":"}</div>
        <div css={attributesContainerStyle}>
          {attribute.items.map((selectedAttribute) => {
            const selected =
              attributeValues[attribute.name] === selectedAttribute.id;
            const textAttributeStyle = selected
              ? selectedTextAttributeStyle
              : unselectedTextAttributeStyle;

            return (
              <div
                key={selectedAttribute.id}
                css={textAttributeStyle}
                onClick={() =>
                  selected
                    ? null
                    : this.handleAttributeClick(
                        attribute.id,
                        selectedAttribute.id
                      )
                }
              >
                {selectedAttribute.displayValue}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
