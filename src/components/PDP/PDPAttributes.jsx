/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import Attribute from "../Attribute";

const styling = {
  attributeNameStyle: css`
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
  `,
  attributesContainerStyleText: css`
    display: flex;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 24px;
  `,
  attributesContainerStyleSwatch: css`
    display: flex;
    gap: 12px;
    margin-top: 8px;
    margin-bottom: 24px;
  `,
  unselectedSwatchAttributeStyle: css`
    width: 32px;
    height: 32px;
    &:hover {
      cursor: pointer;
    }
    margin: 1px;
    z-index: 2;
    position: relative;
    display: flex;
    box-shadow: 4px 4px 10px 4px rgba(161, 166, 172, 0.384);
  `,
  selectedSwatchAttributeStyle: css`
    width: 32px;
    height: 32px;
    z-index: 2;
    margin: 1px;
    display: flex;
    box-shadow: 4px 4px 10px 4px rgba(161, 166, 172, 0.384);
  `,
  unselectedSwatchBorderBoxStyle: css`
    width: 34px;
    height: 34px;
    background-color: #ffffff11;
    border: 1px solid #ffffff11;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  selectedSwatchBorderBoxStyle: css`
    width: 34px;
    height: 34px;
    background-color: #ffffff;
    border: 1px solid #5ece7b;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  unselectedTextAttributeStyle: css`
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
    text-align: center;
    transition: 100ms;
    &:hover {
      background-color: #1d1f22;
      color: #ffffff;
      cursor: pointer;
      transition: 100ms;
    }
  `,
  selectedTextAttributeStyle: css`
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
    text-align: center;
    display: flex;
    background-color: #1d1f22;
    color: #ffffff;
  `,
};

export default class PDPAttributes extends Component {
  render() {
    const { attributeValues, attributes, onProductAttributeChange } =
      this.props;
    const attributesArray = structuredClone(attributes);

    return (
      <div>
        {attributesArray
          // sorting so that attribute types appear always in the same order
          .sort((a, b) => {
            let attributeTypeA = a.type;
            let attributeTypeB = b.type;
            return attributeTypeA < attributeTypeB
              ? 1
              : attributeTypeA > attributeTypeB
              ? -1
              : 0;
          })
          .map((attribute) => (
            <Attribute
              attribute={attribute}
              attributeValues={attributeValues}
              onProductAttributeChange={onProductAttributeChange}
              styling={styling}
              attributeType={attribute.type}
            />
          ))}
      </div>
    );
  }
}
