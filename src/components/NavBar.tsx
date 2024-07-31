import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { Searchinput } from "./Searchinput";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Searchinput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
