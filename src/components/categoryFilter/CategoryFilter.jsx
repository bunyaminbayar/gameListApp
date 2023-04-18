import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

function CategoryFilter({ categories, selectedCategories, onCategoryChange }) {
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
      <Typography variant="h6">Categories</Typography>
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
