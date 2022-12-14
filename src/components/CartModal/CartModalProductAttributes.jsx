/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import Attribute from "../Attribute";

const styling = {
  attributeNameStyle: css`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings: "lnum" 1;
  `,
  attributesContainerStyleText: css`
    display: flex;
    gap: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  `,
  attributesContainerStyleSwatch: css`
    display: flex;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  `,
  unselectedSwatchAttributeStyle: css`
    width: 16px;
    height: 16px;
    margin: 1px;
    z-index: 2;
    position: relative;
    display: flex;
    box-shadow: 1px 4px 10px 4px rgba(161, 166, 172, 0.384);
  `,
  selectedSwatchAttributeStyle: css`
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  unselectedSwatchBorderBoxStyle: css`
    width: 16px;
    height: 16px;
    background-color: #ffffff11;
    border: 1px solid #ffffff11;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  selectedSwatchBorderBoxStyle: css`
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    border: 1px solid #5ece7b;
    z-index: 1;
    align-items: center;
    justify-items: center;
  `,
  unselectedTextAttributeStyle: css`
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
  `,
  selectedTextAttributeStyle: css`
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
  `,
};

export default class CartModalProductAttributes extends Component {
  render() {
    const { attributeValues, attributes } = this.props;

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
              styling={styling}
              attributeType={attribute.type}
            />
          ))}
      </div>
    );
  }
}
