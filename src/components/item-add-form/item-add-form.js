import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    const addBtnStyle = {
      whiteSpace: 'nowrap'
    };

    return (
      <div className="item-add-form d-flex">
        <input type="text"
               className="form-control"
               placeholder="What needs to be done" />
        <button
          className="btn btn-outline-secondary"
          style={addBtnStyle}
          onClick={() => this.props.onItemAdded("Hello")}>
          Add Item
        </button>
      </div>
    );
  }
}