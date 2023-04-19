import { useContext } from 'react';
import { Box, Grid, Typography, Badge, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageContext from '../../context/LanguageContext';

// Game Card
export default function GameItem(props) {

    // Global language
    const { language } = useContext(LanguageContext);

    // Buy now function
    const handleBuyNow = (e) => {
        const gameId = e.target.value;
        const updatedGames = props.allGames.map(game => {
            if (game.Id == gameId) {
                return {
                    ...game,
                    Status: game.Status === null ? "Bought" : null
                };
            } else {
                return game;
            }
        });
        // Update localStroge
        localStorage.setItem('myGames', JSON.stringify(updatedGames));
        props.setAllGames(updatedGames);
    };

    // Likes function
    const handleUserLikes = (e) => {
        const gameId = e.currentTarget.getAttribute("dataid");
        console.log(gameId);
        const updatedGames = props.allGames.map(game => {
            if (game.Id == gameId) {
                return {
                    ...game,
                    Likes: game.Likes === null ? 0 : (game.LikesStatus === 0 ? game.Likes + 1 : game.Likes - 1),
                    LikesStatus: game.LikesStatus === 1 ? 0 : 1,
                };
            } else {
                return game;
            }
        });
        // Update localstroge
        localStorage.setItem('myGames', JSON.stringify(updatedGames));
        props.setAllGames(updatedGames);
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" height="100%" border="1px solid #eee" sx={{ cursor: "pointer" }}>
                <Box display="flex" flexDirection="column" flexShrink={0} width="50%">
                    <Badge dataid={props.gameId} className='likesBadge' badgeContent={props.gameLikes} max={999} color="primary" onClick={handleUserLikes}>
                        <FavoriteIcon color={props.gameLikesStatus === 1 ? "secondary" : "action"} fontSize="large" />
                    </Badge>
                    <img src={props.gameCover} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={props.gameCover} />
                </Box>
                <Box pb={6} flexGrow={1} position="relative">
                    <Typography ml={2} variant="h6" sx={{ fontWeight: "600" }}>{props.gameName}</Typography>
                    <Typography ml={2} variant="p" style={{ fontSize: "10px", fontWeight: "bold" }}>
                        {props.gameCategories.join(" ")}
                    </Typography>
                    <Typography ml={2} variant="body1" className="clamp-3">{props.gameSummary}</Typography>
                    {props.gameStatus === null ?
                        <Box pt={2} textAlign="center">
                            <Button value={props.gameId} bgcolor="#000" variant="contained" onClick={handleBuyNow}>{language === "en" ? "Buy Now" : "Satın al"}</Button>
                        </Box>
                        :
                        <Box pt={2} textAlign="center">
                            <Button value={props.gameId} bgcolor="#000" variant="contained" onClick={handleBuyNow}>{language === "en" ? "Remove" : "Kaldır"}</Button>
                        </Box>
                    }
                    <Box textAlign="center" position="absolute" bottom="0" bgcolor="black" color="white" p={1} width="100%">{language === "en" ? "Price" : "Fiyat"} : {props.gamePrice}</Box>
                </Box>
            </Box>
        </Grid>
    )
}
