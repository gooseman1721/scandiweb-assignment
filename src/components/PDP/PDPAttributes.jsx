/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

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

const unselectedSwatchAttributeStyle = css`
  width: 32px;
  height: 32px;
`;

export default class PDPAttributes extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.attributes
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
              const attributeType = attribute.type;
              switch (attributeType) {
                case "text":
                  return (
                    <div key={attribute.id}>
                      <div
                        css={css`
                          font-family: "Roboto Condensed";
                          font-style: normal;
                          font-weight: 700;
                          font-size: 18px;
                          line-height: 18px;
                        `}
                      >
                        {attribute.name.toUpperCase() + ":"}
                      </div>
                      <div
                        css={css`
                          display: flex;
                          gap: 12px;
                          margin-top: 8px;
                          margin-bottom: 24px;
                        `}
                      >
                        {attribute.items.map((item) => (
                          <div key={item.id} css={unselectedTextAttributeStyle}>
                            {item.displayValue}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                case "swatch":
                  return (
                    <div key={attribute.id}>
                      <div
                        css={css`
                          font-family: "Roboto Condensed";
                          font-style: normal;
                          font-weight: 700;
                          font-size: 18px;
                          line-height: 18px;
                        `}
                      >
                        {attribute.name.toUpperCase() + ":"}
                      </div>
                      <div
                        css={css`
                          display: flex;
                          gap: 8px;
                          margin-top: 8px;
                        `}
                      >
                        {attribute.items.map((item) => (
                          <div
                            key={item.id}
                            css={css`
                              ${unselectedSwatchAttributeStyle}
                              background-color: ${item.value};
                              padding: 2px;
                              &:hover {
                                border: 1px solid #5ece7b;
                                padding: 1px;
                              }
                            `}
                          ></div>
                        ))}
                      </div>
                    </div>
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
