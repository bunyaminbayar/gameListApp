import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Typography, Button, Link } from '@mui/material';
import axios from 'axios';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import GameItem from '../gameItem/GameItem';
import SearchBar from '../searchBar/SearchBar';
import LanguageContext from '../../context/LanguageContext';

// Game list container
function GameList(props) {
  const [games, setGames] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allGames, setAllGames] = useState([]);
  // Global language
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem('myGames'));
    // then I save localstorage to update this data.
    setAllGames(savedGames);
    // If localStorage is empty, immediately match the data from the Json. If full, continue to use.
    if (savedGames === null) {
      axios.get('data/simple_game_store_db.json').then((response) => {
        let filteredGames = response.data;
        localStorage.setItem('myGames', JSON.stringify(response.data));
        saveGame(filteredGames);
        // just in case if the setAllGames value is empty.
        if (allGames === null || allGames === []) {
          setAllGames(response.data)
        }
      });
    } else {
      saveGame(savedGames)
    }

    // Since the game listing container is the same, Filter all games or games owned by the user. Also change the order.
    function saveGame(filteredGames) {
      if (!props.allGame) {
        filteredGames = filteredGames.filter(game => game.Status === "Bought" || game.Status === "Shared");
        filteredGames = filteredGames.sort((game1, game2) => game1.Name.localeCompare(game2.Name)); // sort the filtered games by Likes parameter in descending order
      }
      setGames(filteredGames);
    }
  }, [allGames]);

  // Filter games by search box or by category filtering
  const filterGames = (game) => {
    return game.Name.toLowerCase().includes(searchText.toLowerCase()) && (selectedCategories.length === 0 || selectedCategories.some((category) => game.Categories.includes(category)));
  };

  const handleSearchTextChange = (searchText) => {
    setSearchText(searchText);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  // Dynamically retrieve categories in games list
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
              <GameItem key={game.Id} gameId={game.Id} gameName={game.Name} gameCover={game.Cover} gameLikes={game.Likes} gameLikesStatus={game.LikesStatus} gameCategories={game.Categories} gameSummary={game.Summary} gamePrice={game.Price} gameStatus={game.Status} games={games} setGames={setGames} allGames={allGames} setAllGames={setAllGames} gameBuy={props.allGame ? true : false} />
            ))}
            {games.filter(filterGames).length === 0 && (
              <Grid item xs={12} >
                <Box textAlign="center" mt={2}>
                  {/** if it is on myLibrary page I create the following condition to redirect My store */}
                  {props.allGame ? <Typography variant="body1">{language === "en" ? "No games found" : "Oyun Bulunamadı"}</Typography> : <Link href='/myStore' ><Button variant="contained" color="primary">{language === "en" ? "Go to Store" : "Mağazaya Git"}</Button></Link>}
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
