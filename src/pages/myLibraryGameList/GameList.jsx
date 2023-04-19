import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Link } from '@mui/material';
import axios from 'axios';
import CategoryFilter from '../../components/categoryFilter/CategoryFilter';
import GameItem from '../../components/gameItem/GameItem';
import SearchBar from '../../components/searchBar/SearchBar';

function GameList(props) {
  const [games, setGames] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);


  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem('myGames'));
    // then I print localstorage to update this data.
    if (savedGames === null) {
      axios.get('data/simple_game_store_db.json').then((response) => {
        let filteredGames = response.data;
        localStorage.setItem('myGames', JSON.stringify(filteredGames));
        saveGame(filteredGames);
      });

    } else {
      saveGame(savedGames)
    }

    function saveGame(filteredGames) {
      if (!props.allGame) {
        filteredGames = filteredGames.filter(game => game.Status === "Bought" || game.Status === "Shared");
        filteredGames = filteredGames.sort((game1, game2) => game1.Name.localeCompare(game2.Name)); // sort the filtered games by Likes parameter in descending order
      }
      setGames(filteredGames);
    }
  }, []);

  const filterGames = (game) => {
    return game.Name.toLowerCase().includes(searchText.toLowerCase()) && (selectedCategories.length === 0 || selectedCategories.some((category) => game.Categories.includes(category)));
  };

  const handleSearchTextChange = (searchText) => {
    setSearchText(searchText);
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
            <SearchBar searchText={searchText} onSearchTextChange={handleSearchTextChange} />
          </Box>
          <Grid container spacing={2}>
            {games.filter(filterGames).map((game) => (
              <GameItem key={game.Id} gameName={game.Name} gameCover={game.Cover} gameLikes={game.Likes} gameCategories={game.Categories} gameSummary={game.Summary} gamePrice={game.Price} gameStatus={game.Status} gameBuy={props.allGame ? true : false} />
            ))}
            {games.filter(filterGames).length === 0 && (
              <Grid item xs={12} >
                <Box textAlign="center" mt={2}>
                  {/** if it is on myLibrary page I create the following condition to redirect My store */}
                  {props.allGame ? <Typography variant="body1">No games found</Typography> : <Link href='/myStore' ><Button variant="contained" color="primary">Go to Store</Button></Link>}
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
