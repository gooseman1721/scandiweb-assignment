/** @jsxImportSource @emotion/react */

import { Component } from "react";
import { css } from "@emotion/react";

import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { changeSelectedCategory } from "../../features/product_data/productCategoriesSlice";

const containerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 234px;
  margin-left: 100px;
  height: 80px;
  flex-grow: 1;
`;

class CategoryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePage: false,
    };
  }

  handleClick(categoryIndex) {
    if (categoryIndex !== this.props.selectedCategory) {
      this.props.changeSelectedCategory(categoryIndex);
    }

    if (window.location.pathname !== "/") {
      this.setState({ changePage: true });
    } else if (window.location.pathname === "/") {
      this.setState({ changePage: false });
    }

    if (this.props.modalIsOpen) {
      this.props.openCloseModal();
    }
  }

  render() {
    return (
      <div css={containerStyle}>
        {this.props.categories.map((categoryName, index) => (
          <div
            key={index}
            css={css`
              font-family: "Raleway";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 80px;
              height: 78px;
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
        {/* This page changing feature sometimes results in flashing, should be done differently */}
        {this.state.changePage && window.location.pathname !== "/" && (
          <>
            {this.setState({ changePage: false })}
            <Navigate to={`/`} />
          </>
        )}
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
