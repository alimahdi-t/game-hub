import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>
        {colorMode.charAt(0).toUpperCase().concat(colorMode.slice(1))} Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
