/** @jsxImportSource @emotion/react */

import { Component } from "react";
import { css } from "@emotion/react";
import { connect } from "react-redux";

import { get_category_items } from "../GraphQLEndpoint";

import { fetchCategoryNames } from "../features/product_data/productCategoriesSlice";
import { productListCreate } from "../features/product_data/productListSlice";
import ProductCardGrid from "../components/ProductCardGrid";

const categoryPageContainer = css`
  background-color: #ffffff;
  width: 1440px;
  height: 1433px;
  margin: auto;
`;

const categoryPageTitle = css`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  margin-left: 100px;
  margin-top: 80px;
`;

class CategoryPage extends Component {
  componentDidMount() {
    // fetch category names first
    if (this.props.categories[0] === "default") {
      this.props
        .fetchCategoryNames()
        // then fetch category items after we have a category
        .then(() => {
          get_category_items(
            this.props.categories[this.props.selectedCategory]
          ).then((graphql_result) => {
            this.props.productListCreate(graphql_result);
          });
        });
      // if already fetched
    } else {
      get_category_items(
        this.props.categories[this.props.selectedCategory]
      ).then((graphql_result) => {
        this.props.productListCreate(graphql_result);
      });
    }
  }
  componentDidUpdate(prevProps) {
    // fetch category items after user changes category
    if (this.props.selectedCategory !== prevProps.selectedCategory) {
      get_category_items(
        this.props.categories[this.props.selectedCategory]
      ).then((graphql_result) => {
        this.props.productListCreate(graphql_result);
      });
    }
  }
  componentWillUnmount() {
    // cleaning up productList, so it will be empty if component mounts later
    this.props.productListCreate([]);
  }
  render() {
    return (
      <div css={categoryPageContainer}>
        <div css={categoryPageTitle}>
          {this.props.categories[this.props.selectedCategory][0].toUpperCase() +
            this.props.categories[this.props.selectedCategory].slice(1)}
        </div>
        <ProductCardGrid productList={this.props.productList} />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    categories: state.productCategories.categories,
    selectedCategory: state.productCategories.selectedCategory,
    productList: state.productList.products,
    cartContent: state.cart.cartProducts,
  };
};

export default connect(mapStateToProps, {
  productListCreate,
  fetchCategoryNames,
})(CategoryPage);
