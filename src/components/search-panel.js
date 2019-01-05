import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
      fontSize: '21px'
  };
  return <input 
      style={searchStyle}
      placeholder={searchText} />;
}

export default SearchPanel;