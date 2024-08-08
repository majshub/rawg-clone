import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { Searchinput } from "./Searchinput";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Searchinput />
      <ColorModeSwitch />
    </HStack>
  );
};
