import { Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClint from "../services/api-clint.ts";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    apiClint
      .get<FetchGamesResponse>("/gamfes")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>{games?.map((game) => <li key={game.id}>{game.name}</li>)}</ul>
    </>
  );
};

export default GameGrid;
