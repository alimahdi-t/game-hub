import useGenres from "../hooks/useGenres.ts";
import {
  Box,
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

const GenreList = () => {
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
