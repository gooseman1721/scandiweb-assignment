/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

export default class PDPImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largeImageIndex: 0,
    };
  }

  handleSmallImageClick(imageIndex) {
    if (this.state.largeImageIndex !== imageIndex) {
      this.setState({ largeImageIndex: imageIndex });
    }
  }

  render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          margin-left: 100px;
          margin-right: 50px;
          gap: 20px;
        `}
      >
        <div>
          {this.props.productDetails.gallery.map((imageLink, index) => (
            <div
              key={`${this.props.productDetails.name} ${index}`}
              css={css`
                width: 80px;
                height: 80px;
                margin-bottom: 40px;
              `}
            >
              <img
                src={imageLink}
                alt={`${this.props.productDetails.name} ${index}`}
                css={css`
                  flex-shrink: 1;
                  max-height: 100%;
                  max-width: 100%;
                  &:hover {
                    cursor: pointer;
                  }
                `}
                onClick={() => this.handleSmallImageClick(index)}
              />
            </div>
          ))}
        </div>
        <div
          css={css`
            height: 511px;
            width: 610px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            // margin: auto;
            margin-top: 2px;
          `}
        >
          <img
            src={this.props.productDetails.gallery[this.state.largeImageIndex]}
            alt={this.props.productDetails.name}
            key={`big img ${this.props.productDetails.name} ${this.state.largeImageIndex}`}
            css={css`
              flex-shrink: 1;
              max-height: 100%;
              max-width: 100%;
              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
              animation: 200ms ease-out 0s 1 fadeIn;
            `}
          />
        </div>
      </div>
    );
  }
}
