/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { productDetailsCreate } from "../features/product_data/productDetailsSlice";
import PDPRightPanel from "../components/PDP/PDPRightPanel";
import PDPImageCarousel from "../components/PDP/PDPImageCarousel";

export function withRouter(Children) {
  return (props) => {
    const params = { params: useParams() };
    return <Children {...props} params={params} />;
  };
}

class ProductDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisProductDetails: this.props.productDetails.find((product) => {
        return product.id === this.props.params.params.productId;
      }),
    };
  }

  componentDidMount() {
    // get_item_details(this.props.params.params.productId).then(
    //   (graphql_result) =>
    //     this.props.productDetailsCreate(graphql_result.product)
    // );
    // this.setState({
    //   thisProductDetails: this.props.productDetails.filter((product) => {
    //     return product.id === this.props.params.params.productId;
    //   }),
    // });
  }

  render() {
    return (
      <div
        css={css`
          background-color: #ffffff;
          width: 1440px;
          height: 933px;

          margin: auto;
        `}
      >
        <div css={css`
          margin-top: 80px;
          display: flex;
        `}>
          <PDPImageCarousel productDetails={this.state.thisProductDetails}/>
          <PDPRightPanel productDetails={this.state.thisProductDetails} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    productDetails: state.productDetails.productDetailsList,
  };
};

export default withRouter(
  connect(mapStateToProps, { productDetailsCreate })(ProductDisplayPage)
);
