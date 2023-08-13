import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
    </HStack>
  );
};

export default ColorModeSwitch;
