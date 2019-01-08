import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const searchText = 'Type here to search';
    const searchStyle = {
      fontSize: '21px',
      marginRight: '10px'
    };

    return <input 
            style={searchStyle}
            placeholder={searchText} 
            className="form-control"
            value={this.state.term}
            onChange={this.onSearchChange}/>;
  }
}