import React, { Component } from 'react';

class Seat extends Component {
  // checks if seat is selected by a user
  _renderLabel = () => {
    if (this.props.reservedBy) {
      return this.props.reservedBy;
    } else {
      return this.props.id.toUpperCase();
    }
  };

  // this function passes id of the clicked button back to Flights (parent) component
  _handleChange = (event) => {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <>
      <input
        type="radio"
        id={ this.props.id }
        disabled={ this.props.reservedBy }
        checked={ this.props.checked }
        readOnly // an error in the console suggested to use this - it's gone now
      />
      <label onClick={ this._handleChange } >{ this._renderLabel() }</label>
      </>
    );
  }
}

export default Seat;
