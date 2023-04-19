import React from 'react';
import { Box, Grid, Typography, Badge, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function GameItem(props) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" height="100%" border="1px solid #eee" sx={{ cursor: "pointer" }}>
                <Box display="flex" flexDirection="column" flexShrink={0} width="50%">
                    <Badge className='likesBadge' badgeContent={props.gameLikes} max={999} color="primary">
                        <FavoriteIcon color="black" fontSize="large" />
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
                        <Box pt={2} textAlign="center"><Button bgcolor="#000" variant="contained">Buy Now</Button></Box> : null
                    }
                    <Box textAlign="center" position="absolute" bottom="0" bgcolor="black" color="white" p={1} width="100%"> Price : {props.gamePrice}</Box>
                </Box>
            </Box>
        </Grid>
    )
}
