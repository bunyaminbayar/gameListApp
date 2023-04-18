import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function MyGameStore() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // API'dan oyunlar listesi alınacak
    const fetchedGames = [
      {
        id: 1,
        name: "Game 1",
        image: "https://via.placeholder.com/150",
        price: 10,
      },
      {
        id: 2,
        name: "Game 2",
        image: "https://via.placeholder.com/150",
        price: 20,
      },
      {
        id: 3,
        name: "Game 3",
        image: "https://via.placeholder.com/150",
        price: 30,
      },
    ];

    setGames(fetchedGames);
  }, []);

  return (
    <>
      {games.length ? (
        games.map((game) => (
          <Card key={game.id}>
            mağazam sayfası
            <CardMedia image={game.image} title={game.name} />
            <CardContent>
              <Typography variant="h5" component="h2">
                {game.name}
              </Typography>
              <Typography>${game.price}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>Hala hiçbir oyununuz yok. Satın almak için mağazaya gidin.</Typography>
      )}
    </>
  );
}

export default MyGameStore;
