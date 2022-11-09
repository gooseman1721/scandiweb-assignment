/** @jsxImportSource @emotion/react */

import { Component } from "react";
import { css } from "@emotion/react";

import { connect } from "react-redux";


const navItemStyle = css`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;

class CategoryNav extends Component {
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
        <div
          css={navItemStyle}
        >
          {this.props.categories[0]}
        </div>
        <div css={navItemStyle}>{this.props.categories[1]}</div>
        <div css={navItemStyle}>{this.props.categories[2]}</div>
      </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    categories: state.productCategories.categories,
  };
};

export default connect(mapStateToProps, null)(CategoryNav);
