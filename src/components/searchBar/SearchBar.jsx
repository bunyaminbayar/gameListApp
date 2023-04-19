import React from 'react';
import { TextField } from '@mui/material';

function SearchBar(props) {
  const handleSearchTextChange = (event) => {
    props.onSearchTextChange(event.target.value);
  };

  return (
    <TextField
      fullWidth
      id="search"
      label="Search Games"
      value={props.searchText}
      onChange={handleSearchTextChange}
      variant="outlined"
    />
  );
}

export default SearchBar;
