import { useContext } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import LanguageContext from '../../context/LanguageContext';

function CategoryFilter({ categories, selectedCategories, onCategoryChange }) {

  const { language } = useContext(LanguageContext);

  // Get category name values from data dynamically
  const handleCategoryChange = (event) => {
    const { name } = event.target;
    if (selectedCategories.includes(name)) {
      onCategoryChange(selectedCategories.filter((category) => category !== name));
    } else {
      onCategoryChange([...selectedCategories, name]);
    }
  };

  return (
    <Box>
      <Typography variant="h6">{language === "en" ? "Categories" : "Kategori"}</Typography>
      <FormGroup>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
                name={category}
                color="primary"
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default CategoryFilter;
