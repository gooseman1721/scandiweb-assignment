/** @jsxImportSource @emotion/react */

import { Component } from "react";
import { css } from "@emotion/react";

import { get_category_names, get_category_items } from "../GraphQLEndpoint";
import { connect } from "react-redux";

import { productCategoriesCreate } from "../features/product_data/productCategoriesSlice";
import { productListCreate } from "../features/product_data/productListSlice";
import ProductCard from "../components/TopBar/ProductCard";

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
          height: 1433px;
          margin: auto;
          
        `}
      >
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 400;
            font-size: 42px;
            line-height: 160%;
            margin-left: 100px;
            margin-top: 80px;
          `}
        >
          {this.props.categories[this.props.selectedCategory][0].toUpperCase() +
            this.props.categories[this.props.selectedCategory].slice(1)}
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 33% 33% 33%;
            grid-gap: 40px;
            margin-left: 100px;
            margin-right: 100px;
            margin-top: 100px;
          `}
        >
          {this.props.productList.map((data, index) => (
            <ProductCard key={index} productData={data} />
          ))}
        </div>
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
