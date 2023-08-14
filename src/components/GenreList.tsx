import useGenres, { Genre } from "../hooks/useGenres.ts";
import {
  Box,
  Button,
  Collapse,
  Heading,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const { isOpen, onToggle } = useDisclosure();
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  if (error) return null;
  return (
    <>
      <Heading marginBottom={5} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeleton.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <HStack>
                <Skeleton boxSize="32px" borderRadius={8} />

                <SkeletonText width="60%" borderRadius={2} />
              </HStack>
            </ListItem>
          ))}

        <Collapse in={isOpen} animateOpacity startingHeight="200px">
          <Box rounded="md" shadow="md">
            {data?.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  <Button
                    fontWeight={
                      genre.id === selectedGenre?.id ? "extrabold" : "normal"
                    }
                    onClick={() => onSelectGenre(genre)}
                    fontSize="lg"
                    variant="link"
                    overflow="hidden"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </Box>
        </Collapse>
        <HStack mt={5} onClick={onToggle}>
          <IconButton
            boxSize="30px"
            aria-label="more"
            icon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
          />
          <Text>{isOpen ? "Hide" : "Show All"}</Text>
        </HStack>
      </List>
    </>
  );
};

export default GenreList;
