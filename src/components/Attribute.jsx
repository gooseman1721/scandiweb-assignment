/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

export default class Attribute extends Component {
  handleAttributeClick(attribute_id, item_id) {
    if ("onProductAttributeChange" in this.props) {
      this.props.onProductAttributeChange(attribute_id, item_id);
    }
  }

  render() {
    const { attribute, attributeValues, attributeType } = this.props;
    const {
      attributeNameStyle,
      attributesContainerStyleText,
      attributesContainerStyleSwatch,
      selectedTextAttributeStyle,
      unselectedTextAttributeStyle,
      selectedSwatchAttributeStyle,
      unselectedSwatchAttributeStyle,
      selectedSwatchBorderBoxStyle,
      unselectedSwatchBorderBoxStyle,
    } = this.props.styling;

    switch (attributeType) {
      case "text":
        return (
          <div key={attribute.id}>
            <div css={attributeNameStyle}>
              {attribute.name + ":"}
            </div>
            <div css={attributesContainerStyleText}>
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
      case "swatch":
        return (
          <div key={attribute.id}>
            <div css={attributeNameStyle}>
              {attribute.name + ":"}
            </div>
            <div css={attributesContainerStyleSwatch}>
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
                      onClick={() =>
                        selected
                          ? null
                          : this.handleAttributeClick(
                              attribute.id,
                              selectedAttribute.id
                            )
                      }
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return <></>;
    }
  }
}
