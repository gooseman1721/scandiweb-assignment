import React, { Component } from 'react'

export default class ActionsNav extends Component {
  handleCartClick() {
    this.props.openCloseModal()
  }
  render() {
    return (
      <>
        <div>Currency</div>
        <div onClick={()=>this.handleCartClick()}>Cart</div>
      </>
    );
  }
}
