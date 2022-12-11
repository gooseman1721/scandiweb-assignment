import React, { Component } from 'react'
import CartModalProductAttributeSwatch from './CartModalProductAttributeSwatch';
import CartModalProductAttributeText from './CartModalProductAttributeText';

export default class CartModalProductAttributes extends Component {
  render() {
    const { attributeValues, attributes } =
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
                  <CartModalProductAttributeText
                    attribute={attribute}
                    attributeValues={attributeValues}
                  />
                );
              case "swatch":
                return (
                  <CartModalProductAttributeSwatch
                    attribute={attribute}
                    attributeValues={attributeValues}
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
