/** @jsxImportSource @emotion/react */

import React, { Component } from "react";

import { css } from "@emotion/react";

const imageCarouselContainer = css`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  margin-right: 50px;
  gap: 20px;
`;

const smallImageContainer = css`
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
`;

const smallImageStyle = css`
  flex-shrink: 1;
  max-height: 100%;
  max-width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const bigImageContainer = css`
  height: 511px;
  width: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 2px;
`;

const bigImageStyle = css`
  flex-shrink: 1;
  max-height: 100%;
  max-width: 100%;
  @keyframes fadeIn {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
  animation: 200ms ease-out 0s 1 fadeIn;
`;

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
      <div css={imageCarouselContainer}>
        <div>
          {this.props.productDetails.gallery.map((imageLink, index) => (
            <div
              key={`${this.props.productDetails.name} ${index}`}
              css={smallImageContainer}
            >
              <img
                src={imageLink}
                alt={`${this.props.productDetails.name} ${index}`}
                css={smallImageStyle}
                onClick={() => this.handleSmallImageClick(index)}
              />
            </div>
          ))}
        </div>
        <div css={bigImageContainer}>
          <img
            src={this.props.productDetails.gallery[this.state.largeImageIndex]}
            alt={this.props.productDetails.name}
            key={`big img ${this.props.productDetails.name} ${this.state.largeImageIndex}`}
            css={bigImageStyle}
          />
        </div>
      </div>
    );
  }
}
