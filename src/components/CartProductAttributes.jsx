/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { attributeSortingFunction } from "../utils";
import Attribute from "./Attribute";

export default class CartProductAttributes extends Component {
  render() {
    const { attributeValues, attributes, attributesStyling } = this.props;
    const attributesArray = structuredClone(attributes);

    return (
      <div>
        {attributesArray
          // sorting so that attribute types appear always in the same order
          .sort(attributeSortingFunction)
          .map((attribute, index) => (
            <Attribute
              attribute={attribute}
              attributeValues={attributeValues}
              styling={attributesStyling}
              attributeType={attribute.type}
              key={index}
            />
          ))}
      </div>
    );
  }
}
