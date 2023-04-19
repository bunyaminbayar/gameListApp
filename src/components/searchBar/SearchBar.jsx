import { useContext } from 'react';
import { TextField } from '@mui/material';
import LanguageContext from '../../context/LanguageContext';

function SearchBar(props) {
  const handleSearchTextChange = (event) => {
    props.onSearchTextChange(event.target.value);
  };
  //
  const { language } = useContext(LanguageContext);

  return (
    <TextField
      fullWidth
      id="search"
      label={language === "en" ? "Search Games" : "Oyun Ara"}
      value={props.searchText}
      onChange={handleSearchTextChange}
      variant="outlined"
    />
  );
}

export default SearchBar;
