import React, { Component } from "react";
import PDPProductAttributeText from "./PDPProductAttributeText";
import PDPProductAttributeSwatch from "./PDPProductAttributeSwatch";

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
          .map((attribute) => {
            switch (attribute.type) {
              case "text":
                return (
                  <PDPProductAttributeText
                    attribute={attribute}
                    attributeValues={attributeValues}
                    onProductAttributeChange={onProductAttributeChange}
                  />
                );
              case "swatch":
                return (
                  <PDPProductAttributeSwatch
                    attribute={attribute}
                    attributeValues={attributeValues}
                    onProductAttributeChange={onProductAttributeChange}
                  />
                );
              default:
                return <></>;
            }
          })}
      </div>
    );
  }
}
