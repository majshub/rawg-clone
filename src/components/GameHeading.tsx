import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuey: GameQuery;
}

export const GameHeading = ({ gameQuey }: Props) => {
  const heading = `${gameQuey.platform?.name || ""} ${
    gameQuey.genre?.name || ""
  } Games`;

  return (
    <Heading marginY={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};
