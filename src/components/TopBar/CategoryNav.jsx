/** @jsxImportSource @emotion/react */

import { Component } from "react";
import { css } from "@emotion/react";

import { connect } from "react-redux";

import { changeSelectedCategory } from "../../features/product_data/productCategoriesSlice";

const navItemStyle = css`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;

class CategoryNav extends Component {
  handleClick(categoryIndex) {
    this.props.changeSelectedCategory(categoryIndex);
  }

  render() {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;

          width: 234px;
          height: 56px;
          left: 101px;
          bottom: 0px;
          gap: 10px;
        `}
      >
        <div css={navItemStyle} onClick={() => this.handleClick(0)}>
          {this.props.categories[0]}
        </div>
        <div css={navItemStyle} onClick={() => this.handleClick(1)}>
          {this.props.categories[1]}
        </div>
        <div css={navItemStyle} onClick={() => this.handleClick(2)}>
          {this.props.categories[2]}
        </div>
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
