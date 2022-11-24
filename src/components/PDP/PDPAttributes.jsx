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

const unselectedSwatchAttributeStyle = css`
  width: 32px;
  height: 32px;
  //padding: 2px;
  &:hover {
    cursor: pointer;
  }
  margin: 1px;
  z-index: 2;
  position: relative;
  display: flex;
  box-shadow: 4px 4px 10px 4px rgba(161, 166, 172, 0.384);
`;

const selectedSwatchAttributeStyle = css`
  width: 32px;
  height: 32px;
  z-index: 2;
  margin: 1px;
  display: flex;
  box-shadow: 4px 4px 10px 4px rgba(161, 166, 172, 0.384);
`;

const selectedSwatchBorderBoxStyle = css`
  width: 34px;
  height: 34px;
  background-color: #ffffff;
  border: 1px solid #5ece7b;
  z-index: 1;
  align-items: center;
  justify-items: center;
`;

const unselectedSwatchBorderBoxStyle = css`
  width: 34px;
  height: 34px;
  background-color: #ffffff11;
  border: 1px solid #ffffff11;
  z-index: 1;
  align-items: center;
  justify-items: center;
`;

export default class PDPAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: {},
    };
  }

  handleAttributeClick(attribute, item_id) {
    this.setState({
      selectedAttributes: {
        ...this.state.selectedAttributes,
        [attribute]: item_id,
      },
    });
  }

  render() {
    return (
      <>
        <div
          css={css`
            min-height: 270px;
          `}
        >
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
              // this is extremely ugly, should replace with a few functions or components
              switch (attribute.type) {
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
                        {attribute.items.map((item) => {
                          if (
                            this.state.selectedAttributes[attribute.name] ===
                            item.id
                          ) {
                            return (
                              <div
                                key={item.id}
                                css={selectedTextAttributeStyle}
                              >
                                {item.displayValue}
                              </div>
                            );
                          } else {
                            return (
                              <div
                                key={item.id}
                                onClick={() =>
                                  this.handleAttributeClick(
                                    attribute.name,
                                    item.id
                                  )
                                }
                                css={unselectedTextAttributeStyle}
                              >
                                {item.displayValue}
                              </div>
                            );
                          }
                        })}
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
                        {attribute.items.map((item) => {
                          if (
                            this.state.selectedAttributes[attribute.name] ===
                            item.id
                          ) {
                            return (
                              <div
                                css={selectedSwatchBorderBoxStyle}
                              >
                                <div
                                  key={item.id}
                                  css={css`
                                    ${selectedSwatchAttributeStyle}
                                    background-color: ${item.value};
                                  `}
                                ></div>
                              </div>
                            );
                          } else {
                            return (
                              <div css={unselectedSwatchBorderBoxStyle}>
                                <div
                                  key={item.id}
                                  css={css`
                                    ${unselectedSwatchAttributeStyle}
                                    background-color: ${item.value};
                                  `}
                                  onClick={() =>
                                    this.handleAttributeClick(
                                      attribute.name,
                                      item.id
                                    )
                                  }
                                ></div>
                              </div>
                            );
                          }
                        })}
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
