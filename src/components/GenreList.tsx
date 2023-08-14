import useGenres from "../hooks/useGenres.ts";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <List>
        {data?.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
            cursor="pointer"
            _hover={{ color: "yellow.200" }}
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
