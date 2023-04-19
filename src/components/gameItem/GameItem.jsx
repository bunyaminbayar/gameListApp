import { useState } from 'react';
import { Box, Grid, Typography, Badge, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function GameItem(props) {

    const [likes, setLikes] = useState(props.gameLikes);
    const [liked, setLiked] = useState(false);

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
        localStorage.setItem('myGames', JSON.stringify(updatedGames));
        props.setAllGames(updatedGames);
    };

    const handleUserLikes = (e) => {
        const gameId = e.currentTarget.value;

        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
        } else {
            setLikes(likes - 1);
            setLiked(false);
        }
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" height="100%" border="1px solid #eee" sx={{ cursor: "pointer" }}>
                <Box display="flex" flexDirection="column" flexShrink={0} width="50%">
                    <Badge value={props.gameId} className='likesBadge' badgeContent={likes} max={999} color="primary" onClick={handleUserLikes}>
                        <FavoriteIcon color={liked ? "secondary" : "action"} fontSize="large" />
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
                            <Button value={props.gameId} bgcolor="#000" variant="contained" onClick={handleBuyNow}>Buy Now</Button>
                        </Box>
                        :
                        <Box pt={2} textAlign="center">
                            <Button value={props.gameId} bgcolor="#000" variant="contained" onClick={handleBuyNow}>Remove</Button>
                        </Box>
                    }
                    <Box textAlign="center" position="absolute" bottom="0" bgcolor="black" color="white" p={1} width="100%"> Price : {props.gamePrice}</Box>
                </Box>
            </Box>
        </Grid>
    )
}
