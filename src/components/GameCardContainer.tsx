import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      // width={{ lg: "300px", md: "350px", sm: "100%" }}
      borderRadius={10}
      overflow="hidden"
      boxShadow="md"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
