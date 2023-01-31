/** @jsxImportSource @emotion/react */

import React, { Component } from "react";
import { css } from "@emotion/react";
import { connect } from "react-redux";

import {
  fetchCurrencies,
  changeSelectedCurrency,
} from "../../features/product_data/currencySlice";

import { ReactComponent as DownArrow } from "../../svgs/currency-switcher-arrow.svg";

const switcherModal = css`
  position: absolute;
  margin-top: 10px;
  transform: translate(-20px);
  width: 114px;
  display: flex;
  gap: 0px;
  flex-direction: column;
  z-index: 5000;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

const switcherCurrency = css`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 45px;
  background: #ffffffff;
  &:hover {
    cursor: pointer;
    background: #eeeeee;
  }
`;

class CurrencySwitcher extends Component {
  handleCurrencyClick(currencyLabel, currencySymbol) {
    this.props.changeSelectedCurrency({
      label: currencyLabel,
      symbol: currencySymbol,
    });
    this.setState({ switcherOpen: false });
  }

  componentDidMount() {
    if (this.props.currencies.length === 0) {
      this.props.fetchCurrencies();
    }
  }
  render() {
    return (
      <>
        <div
          css={css`
            font-family: "Raleway";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 160%;
            width: 38px;
            text-align: right;
            color: #1d1f22;
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={() => this.props.openCloseSwitcher()}
        >
          {this.props.selectedCurrency.symbol}{" "}
          {this.props.currencySwitcherOpen ? (
            <DownArrow
              css={css`
                transform: rotate(180deg);
              `}
            />
          ) : (
            <DownArrow />
          )}
        </div>
        {this.props.currencySwitcherOpen ? (
          <div css={switcherModal}>
            {this.props.currencies.map((currency, index) => (
              <div
                key={index}
                css={switcherCurrency}
                onClick={() => {
                  this.handleCurrencyClick(currency.label, currency.symbol);
                }}
              >
                {currency.symbol} {currency.label}
              </div>
            ))}
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    currencies: state.currencies.currencies,
    selectedCurrency: state.currencies.selectedCurrency,
  };
};

export default connect(mapStateToProps, {
  fetchCurrencies,
  changeSelectedCurrency,
})(CurrencySwitcher);
