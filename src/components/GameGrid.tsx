import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import { Genre } from "../hooks/useGenres.ts";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        templateRows={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        // columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={5}
        mt={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
