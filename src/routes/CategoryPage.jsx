/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";

import { graphql_test, get_category_names } from "../GraphQLEndpoint";
import { connect } from "react-redux";

import { productCategoriesCreate, selectProductCategories } from "../features/product_data/productCategoriesSlice";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  saveProductCategories = (productCategories) => {
    this.props.productCategoriesCreate(productCategories);
    // this.setState({ result: "" });
    console.log(this.props.categories)
  };

  

  componentDidMount() {
    const graphql = get_category_names();
    graphql.then((graphql_result) => {
      this.setState({ result: graphql_result });
      this.saveProductCategories(graphql_result);
    });
    
   
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
        Category name
        {JSON.stringify(this.state.result)}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    categories: state.productCategories.entities
  }
}

// state => ({categories: selectProductCategories(state)})

export default connect(mapStateToProps, { productCategoriesCreate })(CategoryPage);
