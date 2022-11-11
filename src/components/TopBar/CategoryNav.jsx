/** @jsxImportSource @emotion/react */

import { Component } from "react";
import { css } from "@emotion/react";

import { connect } from "react-redux";

import { changeSelectedCategory } from "../../features/product_data/productCategoriesSlice";

class CategoryNav extends Component {
  handleClick(categoryIndex) {
    if (categoryIndex !== this.props.selectedCategory) {
      this.props.changeSelectedCategory(categoryIndex);
    }
  }

  render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          width: 234px;
          margin-left: 100px;
          height: 80px;
          flex-grow: 1;
        `}
      >
        {this.props.categories.map((categoryName, index) => (
          <div
            css={css`
              font-family: "Raleway";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 80px;
              height: 80px;
              margin-left: 16px;
              margin-right: 16px;

              &:hover {
                cursor: pointer;
                color: #5ece7b;
                border-bottom: 2px solid #5ece7b;
              }
              ${this.props.selectedCategory === index &&
              `
                color: #5ece7b;
                border-bottom: 2px solid #5ece7b;
                font-weight: 600;
              `}
            `}
            onClick={() => this.handleClick(index)}
          >
            {categoryName.toUpperCase()}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    categories: state.productCategories.categories,
    selectedCategory: state.productCategories.selectedCategory,
  };
};

export default connect(mapStateToProps, { changeSelectedCategory })(
  CategoryNav
);
