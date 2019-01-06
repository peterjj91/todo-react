import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '21px',
    marginRight: '10px'
  };
  return <input 
      style={searchStyle}
      placeholder={searchText} 
      className="form-control"/>;
}

export default SearchPanel;