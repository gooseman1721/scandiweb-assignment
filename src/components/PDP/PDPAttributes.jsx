import React, { Component } from "react";

import PDPProductAttributeText from "./PDPProductAttributeText";
import PDPProductAttributeSwatch from "./PDPProductAttributeSwatch";

export default class PDPAttributes extends Component {
  handleAttributeClick(attribute_id, item_id) {
    this.props.onProductAttributeChange(attribute_id, item_id);
  }

  render() {
    const attributeValues = this.props.attributeValues;
    const attributesArray = structuredClone(this.props.attributes);

    return (
      <>
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
              // this is extremely ugly, should replace with a few functions or components
              switch (attribute.type) {
                case "text":
                  return (
                    <PDPProductAttributeText
                      attribute={attribute}
                      attributeValues={attributeValues}
                      onProductAttributeChange={
                        this.props.onProductAttributeChange
                      }
                    />
                  );
                case "swatch":
                  return (
                    <PDPProductAttributeSwatch
                      attribute={attribute}
                      attributeValues={attributeValues}
                      onProductAttributeChange={
                        this.props.onProductAttributeChange
                      }
                    />
                  );
                default:
                  return <></>;
              }
            })}
        </div>
      </>
    );
  }
}
