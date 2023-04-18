import React, { useState, useEffect } from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import CategoryFilter from '../../components/categoryFilter/CategoryFilter';

function GameList() {
  const [games, setGames] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    axios.get('data/simple_game_store_db.json').then((response) => {
      setGames(response.data);
    });
  }, []);

  const filterGames = (game) => {
    return game.Name.toLowerCase().includes(searchText.toLowerCase()) && (selectedCategories.length === 0 || selectedCategories.some((category) => game.Categories.includes(category)));
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const categories = [...new Set(games.flatMap((game) => game.Categories))];

  return (
    <>
      <Grid p={2} container spacing={2}>
        <Grid item xs={12} md={10} sx={{ order: { xs: 2, md: 1 } }}>
          <Box pb={2} textAlign="center">
            <TextField
              fullWidth
              id="search"
              label="Search Games"
              value={searchText}
              onChange={handleSearchTextChange}
              variant="outlined"
            />
          </Box>
          <Grid container spacing={2}>
            {games.filter(filterGames).map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.Id}>
                <Box display="flex" height="100%" border="1px solid #eee" sx={{ cursor: "pointer" }}>
                  <Box display="flex" flexDirection="column" flexShrink={0} width="50%">
                    <img src={game.Cover} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={game.Cover} />
                  </Box>
                  <Box flexGrow={1} position="relative">
                    <Typography ml={2} variant="h6" sx={{ fontWeight: "600" }}>{game.Name}</Typography>
                    <Typography ml={2} variant="p" style={{ fontSize: "10px", fontWeight: "bold" }}>
                      {game.Categories.join(" ")}
                    </Typography>
                    <Typography ml={2} variant="body1" className="clamp-3">{game.Summary}</Typography>
                    <Box textAlign="center" position="absolute" bottom="0" bgcolor="black" color="white" p={1} width="100%"> Price : {game.Price}</Box>
                  </Box>
                </Box>
              </Grid>
            ))}
            {games.filter(filterGames).length === 0 && (
              <Grid item xs={12} >
                <Box textAlign="center" mt={2}>
                  <Typography variant="body1">No games found</Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} sx={{ order: { xs: 1, md: 2 } }}>
          <Box px={2}>
            <CategoryFilter categories={categories} selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default GameList;
