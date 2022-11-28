/** @jsxImportSource @emotion/react */

import { Component } from "react";

import { css } from "@emotion/react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { get_item_details } from "../GraphQLEndpoint";
import { productDetailsCreate } from "../features/product_data/productDetailsSlice";
import { ReactComponent as CartLogo } from "../svgs/Empty Cart.svg";

const quickAddToCartStyle = css`
  position: relative;
  height: 52px;
  width: 52px;
  left: 303px;
  bottom: 102px;
  border-radius: 100%;
  background-color: #5ece7b;
  transition: 0.1s;
  opacity: 0;
  z-index: 4;
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  &:hover {
    cursor: pointer;
    transition: 100ms;
    background-color: #89eba3;
  }
`;

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardClicked: false,
      detailsFetched: false,
    };
  }

  handleCardClick() {
    this.setState({ cardClicked: true });
    if (!this.props.productDetailsIdList.includes(this.props.productData.id)) {
      get_item_details(this.props.productData.id)
        .then((graphql_result) =>
          this.props.productDetailsCreate(graphql_result.product)
        )
        .then(() => this.setState({ detailsFetched: true }));
    } else {
      this.setState({ detailsFetched: true });
    }
  }

  render() {
    return (
      <div
        css={css`
          height: 444px;
          width: 386px;
          padding: auto;
          transition: 0.1s;
          &:hover {
            box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
            transition: 0.1s;
            cursor: pointer;
          }
          &:hover [data-comp="quickAddToCart"] {
            transition: 0.1s;
            opacity: 1;
          }
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
        onClick={() => this.handleCardClick()}
      >
        <div
          css={css`
            height: 330px;
            width: 354px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: auto;
          `}
        >
          <img
            src={this.props.productData.gallery}
            alt={this.props.productData.name}
            css={css`
              flex-shrink: 1;
              max-height: 100%;
              max-width: 100%;
              z-index: 1;
              ${this.props.productData.inStock === false &&
              `
                opacity: 0.5;
              `}
            `}
          />
          {this.props.productData.inStock === false && (
            <div
              css={css`
                z-index: 2;
                position: absolute;
                font-family: "Raleway";
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 160%;
                color: #8d8f9a;
                background-color: #e4e0e08f;
                width: 386px;
                text-align: center;
              `}
            >
              OUT OF STOCK
            </div>
          )}
        </div>
        <div
          css={css`
            margin-top: 24px;
            margin-left: 16px;
            margin-right: 16px;
          `}
        >
          <div
            css={css`
              font-family: "Raleway";
              font-style: normal;
              font-weight: 300;
              font-size: 18px;
              line-height: normal;
              font-feature-settings: "lnum" 1;
              ${this.props.productData.inStock === false &&
              `
                color: #8d8f9a;
              `}
            `}
          >
            {this.props.productData.brand} {this.props.productData.name}
          </div>
          <div
            css={css`
              font-family: "Raleway";
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 160%;
              font-feature-settings: "lnum" 1;
              ${this.props.productData.inStock === false &&
              `
                color: #8d8f9a;
              `}
            `}
          >
            {this.props.productData.prices[0].currency.symbol}
            {this.props.productData.prices[0].amount}
          </div>
        </div>
        {this.props.productData.inStock === true && (
          <div
            css={quickAddToCartStyle}
            data-comp="quickAddToCart"
            title="Quick add to cart"
            onClick={(event) => {
              event.stopPropagation();
              console.log("quick add to cart clicked");
            }}
          >
            <CartLogo />
          </div>
        )}

        {this.state.cardClicked && this.state.detailsFetched && (
          <Navigate to={`product/${this.props.productData.id}`} />
        )}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    productDetailsIdList: state.productDetails.idList,
  };
};

export default connect(mapStateToProps, { productDetailsCreate })(ProductCard);
