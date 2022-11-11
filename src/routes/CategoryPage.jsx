/** @jsxImportSource @emotion/react */

import { Component } from "react";
import { css } from "@emotion/react";

import { get_category_names, get_category_items } from "../GraphQLEndpoint";
import { connect } from "react-redux";

import { productCategoriesCreate } from "../features/product_data/productCategoriesSlice";
import { productListCreate } from "../features/product_data/productListSlice";
import ProductBox from "../components/TopBar/ProductBox";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  saveProductCategories = (productCategories) => {
    this.props.productCategoriesCreate(productCategories);
  };

  componentDidMount() {
    // fetch category names first
    get_category_names()
      .then((graphql_result) => {
        this.setState({ result: graphql_result });
        this.saveProductCategories(graphql_result);
      })
      // then fetch category items after we have a category
      .then(() => {
        get_category_items(
          this.props.categories[this.props.selectedCategory]
        ).then((graphql_result) => {
          console.log(graphql_result);
          this.props.productListCreate(graphql_result);
        });
      });
    console.log(this.props.categories[this.props.selectedCategory]);
  }
  componentDidUpdate(prevProps) {
    // fetch category items after user changes category
    if (this.props.selectedCategory !== prevProps.selectedCategory) {
      get_category_items(
        this.props.categories[this.props.selectedCategory]
      ).then((graphql_result) => {
        console.log(graphql_result);
        this.props.productListCreate(graphql_result);
      });
    }
  }
  render() {
    return (
      <div
        css={css`
          background-color: #ffffff;
          width: 1440px;
          height: 1513px;

          margin: auto;
        `}
      >
        <p>
          This is category {this.props.categories[this.props.selectedCategory]}
        </p>
        {this.props.productList.map((data, index) => (
          <ProductBox key={index} productData={data} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    categories: state.productCategories.categories,
    selectedCategory: state.productCategories.selectedCategory,
    productList: state.productList.products,
  };
};

export default connect(mapStateToProps, {
  productCategoriesCreate,
  productListCreate,
})(CategoryPage);
