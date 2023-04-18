import React from 'react'

export default function GameItem() {
  return (
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
  )
}
